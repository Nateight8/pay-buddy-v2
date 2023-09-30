import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import NavLink from "./NavLinks";

function Header() {
  return (
    <nav className=" p-4  w-full max-w-7xl mx-auto mt-9 sticky top-9 z-50 bg-background ">
      <div className="flex p-4 lg:px-9 md:py-5 border rounded-xl border-border flex-row justify-between items-center">
        <h1 className="font-heading-font text-xl">PayBuddy</h1>

        <ul className="flex-row gap-9 hidden lg:flex">
          <NavLink label="About" />
          <NavLink label="Pricing" />
          <NavLink label="Career" />
          <NavLink label="Blog" />
        </ul>

        <Button variant={"secondary"} className="hidden md:block">
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Header;
