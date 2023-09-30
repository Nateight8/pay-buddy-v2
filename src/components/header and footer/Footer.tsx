import React from "react";
import NavLink from "./NavLinks";

function Footer() {
  return (
    <footer className="py-20 px-4 md:px-0">
      <div className="mx-auto max-w-7xl flex md:justify-between md:items-center flex-col md:flex-row">
        <h1 className="font-heading-font text-2xl">PayBuddy</h1>

        <ul className="flex flex-col md:flex-row">
          <NavLink label="Disclaimer" />
          <NavLink label="Terms of Service" />
          <NavLink label="Privacy Policy" />
        </ul>
      </div>
      <div className="bg-slate-50/10 w-full h-px my-4 opacity-30" />
      <p className="text-lg hidden md:block text-center ">© 2023 PayBuddy</p>
    </footer>
  );
}

export default Footer;
