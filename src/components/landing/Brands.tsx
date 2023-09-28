import Image from "next/image";
import React from "react";

function Brands() {
  return (
    <>
      <div className="mb-8 px-4">
        <h3 className="text-base md:text-3xl text-center mb-2 md:mb-4">
          Used And Trusted By Both Small And Large Teams
        </h3>
        <p className="text-sm md:text-lg text-center">
          Join over 15,000+ companies enjoy industry-leading experience with
          <span className=" text-secondary font-semibold"> PayBuddy</span>.
        </p>
      </div>
      <div className="flex items-center justify-center select-none w-full gap-20 my-8">
        <Image
          className="o object-contain"
          src={"/images/airbnb svg.png"}
          alt=""
          height={56}
          width={145}
        />
        <Image
          className="o object-contain"
          src={"/images/google svg.png"}
          alt=""
          height={56}
          width={145}
        />
        <Image
          className="o object-contain"
          src={"/images/microsoft svg.png"}
          alt=""
          height={56}
          width={145}
        />
        <Image
          className="o object-contain"
          src={"/images/nike svg.png"}
          alt=""
          height={56}
          width={145}
        />
        <Image
          className="o object-contain"
          src={"/images/puma svg.png"}
          alt=""
          height={56}
          width={145}
        />
        <Image
          className="o object-contain"
          src={"/images/spotify svg.png"}
          alt=""
          height={56}
          width={145}
        />
      </div>
    </>
  );
}

export default Brands;
