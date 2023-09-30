import React from "react";
import Card from "./Card";
import { Global, Group, Wallet, YelloWallet } from "../svg";

function Features() {
  return (
    <div className="px-4">
      <div
        style={{ boxShadow: "20px 50px 80px 10px hsla(0, 0%, 0%, 0.25)" }}
        className="w-full md:mx-auto rounded-3xl border-slate-50/10 border max-w-7xl my-32 relative bg-muted overflow-hidden h-[72rem] md:h-[42rem] "
      >
        <div className="absolute bg-secondary h-72 w-72 rounded-full md:-top-24 -bottom-24 -right-24 z-10" />
        <div className="absolute items-center flex flex-col md:flex-row z-20  w-full px-5 md:px-9 py-14">
          <div className="w-full flex-1 mb-7 md:mb-0">
            <div className="ma max-w-sm">
              <h2 className="text-2xl text-center md:text-left md:text-6xl font-heading-font mb-2 md:mb-4  ">
                Features <br className="hidden md:block" /> You’ll Enjoy
              </h2>
              <p className="text-base md:text-left text-center md:text-lg text-muted-foreground">
                Run compliant payroll for your global team in minutes with
                PayBuddy.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2  gap-4 md:gap-9">
            <Card
              info="Bulk pay contractors and direct employees effortlessly "
              secondary
              icon={<Wallet />}
            />

            <Card
              icon={<Global />}
              info="Flexibility with over 20+ payment options"
            />
            <Card
              icon={<Group />}
              info="We’re scalable, we offer services to both small  and large enterprises. "
            />
            <Card
              icon={<YelloWallet />}
              info="We stay up-to-date with evolving tax laws, labor regulations, so you don’t have to"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
