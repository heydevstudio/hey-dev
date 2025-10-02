import { Dispatch, SetStateAction } from "react";
import { INavItem } from "@/app/types";
import NavItem from "./NavItem";
import useWindowWidth from "@/app/hooks/useWindowWidth";

interface IProps {
  mobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Nav({ mobileMenuIsOpen, setMobileMenuIsOpen }: IProps) {
  const windowWidth = useWindowWidth();

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

  return (
    <nav
      className={`lg:z-0 lg:static lg:size-auto lg:bg-transparent z-10 fixed inset-0 size-screen justify-center items-center bg-[#323232] ${
        (windowWidth && windowWidth >= 1024) || mobileMenuIsOpen
          ? "flex"
          : "hidden"
      }`}
    >
      <ul className="lg:flex-row lg:text-base flex flex-col items-center gap-8 text-lg">
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
