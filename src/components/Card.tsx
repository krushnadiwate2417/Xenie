"use client"

import { useState } from "react";

interface CardProps {
  heading: string;
  plan: string;
  price: number;
  desc: string;
  isBest: boolean;
}

interface EnhancedCardProps {
  Card: React.ComponentType<CardProps>; // ✅ Component type that accepts CardProps
}

export default function Card({ heading, plan, price, desc, isBest }: CardProps){

  const [hidden,setHidden] = useState(true);

    return <>
       
        <div onMouseEnter={()=>setHidden(false)} onMouseLeave={()=>setHidden(true)}
        className={` h-[22rem] bg-white rounded-4xl
          ${isBest ? "w-[17rem]" : "w-72"} 
            hover:drop-shadow-lg
        `}
        >
            <div className="flex flex-col self-center h-full justify-center gap-6 items-center ">
              <div className="text-2xl font-bold">{heading}</div>
              <div className="text-sm">{plan}</div>
              <div className="text-4xl font-bold">&#8377; {price} <span className="text-xl font-semibold">+GST</span></div>
              <div className="text-sm">{desc}</div>
              <div className={`transition-all duration-300 overflow-hidden ${
        hidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      }`}><button className="border-2 border-[#453C89] rounded-3xl text-[#453C89] text-xs px-6 py-2.5 cursor-pointer">Buy Now</button></div>
            </div>
        </div>
    </>
}

export function EnhancedCard(WrappedCard: React.ComponentType<CardProps>) {
  return function Enhanced(props: CardProps) {
    return (
      <div className="w-fit pt-1.5 pb-2.5 px-2.5 bg-gradient-to-b from-[#6b60c3] to-[#453C89] rounded-4xl ">
        <div className="text-xs pb-1.5 text-center font-bold text-white">Best Selling</div>
        <WrappedCard {...props} />
      </div>
    );
  };
}