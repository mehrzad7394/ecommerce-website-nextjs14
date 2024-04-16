import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] z-10">
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href={"/"} className="btn btn-ghost text-lg">
            Next Ecommerce
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
