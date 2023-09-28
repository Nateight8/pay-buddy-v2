import React from "react";
import { Button } from "../ui/button";

function Start() {
  return (
    <div className="bg-secondary text-background pt-9 pb-20 mb-4">
      <h3 className="text-center text-4xl font-bold">
        Get Started With PayBuddy
      </h3>
      <p className="mt-5 mb-8 text-lg text-center">
        Join over 15,000+ companies enjoy industry-leading experience with
        PayBuddy.
      </p>
      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto ">
        <Button variant={"accent"}>Get Started for Free</Button>
        <Button variant={"secondary"}>Request Demo</Button>
        <Button>See How it Works</Button>
      </div>
    </div>
  );
}

export default Start;
