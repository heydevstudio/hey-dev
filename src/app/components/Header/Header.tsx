"use client";

import { useEffect, useState } from "react";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import Image from "next/image";
import Nav from "./Nav/Nav";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
  const windowWidth = useWindowWidth();

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    if (windowWidth && windowWidth < 1024 && mobileMenuIsOpen) {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.scrollTop = 0;
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.style.overflowY = "auto";
    }
  }, [windowWidth, mobileMenuIsOpen]);

  return (
    <header className="h-[7rem] w-full border-b border-b-[#b0f45a]">
      <div className="mx-auto flex size-full max-w-7xl items-center justify-between px-6 md:px-16">
        <div className="w-32">
          <Image
            src="/img/logo.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-auto w-full"
            priority
          />
        </div>
        <Nav
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />

        {windowWidth && windowWidth < 1024 ? (
          <button
            className="z-20"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? (
              <RxCross2 className="text-[2.5rem]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[2.5rem]" />
            )}
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
