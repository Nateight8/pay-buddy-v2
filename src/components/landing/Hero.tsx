import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Brands from "./Brands";

function Hero() {
  return (
    <>
      <div className="mb-10 md:my-16 ">
        <div className="max-w-7xl p-4 md:p-0 mb-7 md:mb-12 mx-auto flex flex-col items-center justify-center">
          <div className="mb-5 md:mb-12">
            <h1 className="text-3xl md:text-7xl font-heading-font max-w-3xl text-center mb-3 md:mb-6">
              Automated Payment System For Teams
            </h1>
            <p className="text-center text-lg mb">
              Run compliant payroll for your remote teams in no time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2  md:gap-10 max-w-lg">
            <Button variant={"secondary"}>Get Started For Free</Button>
            <Button>See How it Works</Button>
          </div>
        </div>
        {/* dashboard */}

        <div className="">
          <div className="w-full md:w-[910px] mx-auto relative">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/images/dashboard.png"
                alt="Image"
                className="rounded-md object-contain select-none"
                fill
              />
            </AspectRatio>
            <div className="absolute w-full h-20 md:h-60 bg-gradient-to-t from-background via-background flex items-center justify-center to-transparent  bottom-0">
              <Button variant="secondary">Request a Demo</Button>
            </div>
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
}

export default Hero;
