import { Dispatch, SetStateAction } from "react";
import { INavItem } from "@/app/types";
import NavItem from "./NavItem";
import useWindowWidth from "@/app/hooks/useWindowWidth";

interface IProps {
  mobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const navItems: INavItem[] = [
  {
    href: "#why-choose-us",
    label: "Por Qué Elegirnos",
  },
  {
    href: "#services",
    label: "Servicios",
  },
  {
    href: "#work-process",
    label: "Proceso de Trabajo",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contacto",
  },
];

function Nav({ mobileMenuIsOpen, setMobileMenuIsOpen }: IProps) {
  const windowWidth = useWindowWidth();

  return (
    <nav
      className={`fixed inset-0 z-10 items-center justify-center bg-[#323232] lg:static lg:z-0 lg:bg-transparent ${
        (windowWidth && windowWidth >= 1024) || mobileMenuIsOpen
          ? "flex"
          : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center gap-8 text-lg lg:flex-row lg:text-base">
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            navItem={navItem}
            setMobileMenuIsOpen={setMobileMenuIsOpen}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
