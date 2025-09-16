"use client";

import CarouselCard from "@/components/CarouselCard";
import Image from "next/image";
import { useState } from "react";


const dummyTestimonials : {imgSrc : string, name : string, bussiness : string, testimoal : string}[] = [
  {imgSrc : "/images/HumanImage_frame_4.png",name : "Rajendra",bussiness : "Delhi Retailer",testimoal : "Being able to speak and see invoices pop up is game-changing"},
  {imgSrc : "/images/HumanImage2_frame_4.svg",name : "Hanumant",bussiness : "Maharashtra Retailer",testimoal : "Understanding of language is important as so is invoices"},
]


export default function FrameFour() {

  const [testimoalNum, setTestimonalNum] = useState(0);

  return (
    <>
      <div className="relative h-screen w-full ">
        <Image
          src="/images/frame_4_overlay.svg"
          alt="Background"
          fill
          priority
          className="object-cover rounded-tl-4xl rounded-tr-4xl"
        />
        <Image
          src="/images/frame_4_bg.png"
          alt="Background"
          priority
          fill
          className="object-cover z-10 opacity-50 rounded-tl-4xl rounded-tr-4xl"
        />
        <Image
          src="/images/Ellipse_frame_4.png"
          alt="Ellipse"
          priority
          fill
          className="object-cover z-20 "
        />

        <div className="relative z-20 flex flex-col gap-6 items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold max-w-2xl text-center">Always up-to-date with the latest GST reforms and statutory updates.</h1>
          <div className="text-center text-sm text-neutral-200">Always up-to-date with the latest GST reforms and statutory updates.</div>
          <h1 className="text-xl font-semibold max-w-2xl text-yellow-400 text-center">GST Billing Software for Top Manufacturers</h1>
          <div className="flex gap-24 items-center">
              <div>
                <button 
                className="hover:shadow-2xl hover:brightness-200 hover:shadow-white cursor-pointer border border-white rounded-full px-6 py-4"
                onClick={()=>{
                  setTestimonalNum((curr)=>Math.abs((curr - 1)%dummyTestimonials.length))
                }}
                >L</button>
              </div>

              <CarouselCard imgSrc={dummyTestimonials[testimoalNum].imgSrc} name={dummyTestimonials[testimoalNum].name} bussiness={dummyTestimonials[testimoalNum].bussiness} testimonal={dummyTestimonials[testimoalNum].testimoal} />

              <div><button 
              className="hover:shadow-2xl hover:brightness-200 hover:shadow-white cursor-pointer border border-white rounded-full px-6 py-4"
              onClick={()=>{
                  setTestimonalNum((curr)=>Math.abs((curr + 1)%dummyTestimonials.length))
                }}
              >R</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
