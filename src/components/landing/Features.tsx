import React from "react";
import Card from "./Card";

function Features() {
  return (
    <section
      style={{ boxShadow: "20px 50px 80px 10px hsla(0, 0%, 0%, 0.25)" }}
      className="w-full mx-auto rounded-3xl border-slate-50/10 border max-w-7xl my-32 relative bg-muted overflow-hidden h-[42rem]"
    >
      <div className="absolute bg-secondary h-72 w-72 rounded-full -top-24 -right-24 z-10" />
      <div className="absolute items-center flex z-20  w-full px-9 py-14">
        <div className="w-full flex-1">
          <div className="ma max-w-sm">
            <h2 className="text-6xl font-heading-font mb-4  ">
              Features <br /> You’ll Enjoy
            </h2>
            <p className=" text-lg text-muted-foreground">
              Run compliant payroll for your global team in minutes with
              PayBuddy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 h-[32rem] gap-9">
          <Card
            info="Bulk pay contractors and direct employees effortlessly "
            secondary
          />

          <Card info="Flexibility with over 20+ payment options" />
          <Card info="We’re scalable, we offer services to both small  and large enterprises. " />
          <Card info="We stay up-to-date with evolving tax laws, labor regulations, so you don’t have to" />
        </div>
      </div>
    </section>
  );
}

export default Features;
