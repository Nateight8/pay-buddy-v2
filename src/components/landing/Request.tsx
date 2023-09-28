import React from "react";
import FormComponent from "./FormComponent";

function Request() {
  return (
    <div className="rounded-3xl max-w-7xl py-12 mx-auto mb-32 min-h-[778px] bg-muted relative overflow-hidden">
      <div className="absolute bg-secondary h-72 w-72 rounded-full -top-24 -right-24 z-10" />
      <div className="">
        <h4 className="text-secondary text-center font-bold text-lg">
          REQUEST A DEMO
        </h4>
        <h3 className="text-3xl text-center">See How PayBuddy Works</h3>
        <FormComponent />
      </div>
    </div>
  );
}

export default Request;
