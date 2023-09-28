import Image from "next/image";
import React from "react";

interface Props {
  info: string;
  secondary?: boolean;
}

function Card({ info, secondary }: Props) {
  return (
    <div
      className={`w-full max-w-xs p-5  border-slate-100/20 rounded-xl relative ${
        secondary ? "bg-secondary" : "bg-card border"
      }`}
    >
      <Image
        className="mb-12"
        src="/images/wallet-3.png"
        height={60}
        width={60}
        alt=""
      />
      <p
        className={`text-lg ${
          secondary ? "text-secondary-foreground" : "text-white"
        }`}
      >
        {info}
      </p>
      {secondary && (
        <div className="absolute border border-secondary rounded-xl  w-80 h-52 -bottom-4 border-dashed -right-4 -z-10" />
      )}
    </div>
  );
}

export default Card;
