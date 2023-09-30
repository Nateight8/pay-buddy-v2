"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  info: string;
  secondary?: boolean;
  icon: ReactNode;
}

function Card({ info, secondary, icon }: Props) {
  return (
    <div className="relative">
      <div
        className={`w-full max-w-xs  p-4 md:p-5  border-slate-100/20 rounded-xl relative ${
          secondary ? "bg-secondary" : "bg-card border"
        }`}
      >
        <div className={`mb-12`}>{icon}</div>
        <p
          className={`text-lg ${
            secondary ? "text-muted font-medium" : "text-muted-foreground"
          }`}
        >
          {info}
        </p>
      </div>
      {secondary && (
        <div className=" inset-0 absolute border border-slate-100/40 border-dashed -z-10 rounded-xl -bottom-2 -right-1" />
      )}
    </div>
  );
}

export default Card;
