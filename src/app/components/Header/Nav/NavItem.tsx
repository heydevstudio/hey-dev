import { INavItem } from "@/app/types";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface IProps {
  navItem: INavItem;
  setMobileMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

function NavItem({ navItem, setMobileMenuIsOpen }: IProps) {
  return (
    <li>
      <Link
        href={navItem.href}
        className="inline-block group"
        onClick={() =>
          setMobileMenuIsOpen((mobileMenuIsOpen) =>
            mobileMenuIsOpen ? false : mobileMenuIsOpen
          )
        }
      >
        <span className="inline-block transition-transform duration-400 ease-in-out group-hover:-translate-y-1 group-hover:text-[#b0f45a]">
          {navItem.label}
        </span>
      </Link>
    </li>
  );
}

export default NavItem;
