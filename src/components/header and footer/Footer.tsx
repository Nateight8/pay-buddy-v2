import React from "react";
import NavLink from "./NavLinks";

function Footer() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <h1 className="font-heading-font text-2xl">PayBuddy</h1>
        <p className="text-lg text-center">2023 PayBuddy</p>
        <ul className="flex">
          <NavLink label="Disclaimer" />
          <NavLink label="Terms of Service" />
          <NavLink label="Privacy Policy" />
        </ul>
      </div>
    </div>
  );
}

export default Footer;
