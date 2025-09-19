"use client";

import CarouselCard from "@/components/CarouselCard";
import Image from "next/image";
import { useState } from "react";
import data from "@/utils/data.json";

const {dummyTestimonials,imageOne,imageThree,imageTwo,arrowLeft,arrowRight,heading,subHeadingOne,subHeadingTwo} = data.frameFour;


export default function FrameFour() {

  const [testimoalNum, setTestimonalNum] = useState(0);

  return (
    <>
      <div className="relative h-screen w-full ">
        <Image
          src={imageOne}
          alt="Background"
          fill
          priority
          className="object-cover rounded-tl-4xl rounded-tr-4xl"
        />
        <Image
          src={imageTwo}
          alt="Background"
          priority
          fill
          className="object-cover z-10 opacity-50 rounded-tl-4xl rounded-tr-4xl"
        />
        <Image
          src={imageThree}
          alt="Ellipse"
          priority
          fill
          className="object-cover z-20 "
        />

        <div className="relative z-20 flex flex-col gap-6 items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold max-w-2xl text-center">{heading}</h1>
          <div className="text-center text-sm text-neutral-200">{subHeadingOne}</div>
          <h1 className="text-xl font-semibold max-w-2xl text-yellow-400 text-center">{subHeadingTwo}</h1>
          <div className="flex gap-24 items-center">
              <div>
                <button 
                className=" hover:brightness-200 hover:shadow-[0_0_10px_rgba(255,255,255,1)] cursor-pointer border border-white rounded-full p-2.5"
                onClick={()=>{
                  setTestimonalNum((curr)=>Math.abs((curr - 1)%dummyTestimonials.length))
                }}
                >
                    <Image
                    src={arrowLeft}
                    alt="arrow-left"
                    height={50}
                    width={50}
                    />
                </button>
              </div>

              <CarouselCard imgSrc={dummyTestimonials[testimoalNum].imgSrc} name={dummyTestimonials[testimoalNum].name} bussiness={dummyTestimonials[testimoalNum].bussiness} testimonal={dummyTestimonials[testimoalNum].testimoal} />

              <div><button 
              className="hover:brightness-200 hover:shadow-[0_0_10px_rgba(255,255,255,1)] cursor-pointer border border-white rounded-full p-2.5"
              onClick={()=>{
                  setTestimonalNum((curr)=>Math.abs((curr + 1)%dummyTestimonials.length))
                }}
              >
                <Image
                    src={arrowRight}
                    alt="arrow-right"
                    height={50}
                    width={50}
                    />

              </button></div>
          </div>
        </div>
      </div>
    </>
  );
}
