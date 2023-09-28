import React from "react";
import { Button } from "../ui/button";
import Hero from "./Hero";
import Features from "./Features";
import Faq from "./Faq";
import Request from "./Request";
import Start from "./Start";

function Landing() {
  return (
    <div>
      <Hero />
      <Features />
      <Faq />
      <Request />
      <Start />
    </div>
  );
}

export default Landing;
