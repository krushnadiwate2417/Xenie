import Image from "next/image"
import data from "@/utils/data.json";

const {contentOne,contentTwo,headingOne,headingTwo,subHeading,tagline} = data.frameOne;


export default function FrameOne(){
    return <>
        <div className="relative z-20 grid grid-cols-2 justify-center items-center h-full">
          <div className=" relative">
            <Image
              src="/images/grids_frame_1.png"
              alt="grid"
              width={650}
              height={650}
              priority
              className="object-cover"
            />
            <div className="absolute inset-0  text-neutral-50 flex flex-col justify-center self-center gap-9 mt-[90px] pl-24">
              <div className="flex flex-col gap-2 font-semibold">
                <div className="text-yellow-500 text-5xl">{headingOne}</div>
                <div className=" text-5xl max-w-xl leading-14">{headingTwo}</div>

              </div>
              <div className="text-neutral-400 text-lg w-fit pr-24 leading-6">
                {subHeading}
              </div>
              <div className="flex gap-5 text-sm">
                <div>
                  {contentOne}
                </div>
                <div>
                  {contentTwo}
                </div>
              </div>
              <div className="flex gap-5 text-[12px]">
                <button className="rounded-3xl border cursor-pointer border-white px-8 py-3">Download App</button>
                <button className="rounded-3xl border cursor-pointer border-white px-5 py-3 bg-[#453C89]">Start 7 Day Free Trial</button>
              </div>
              <div className="text-xs">
                {tagline}
              </div>
            </div>
          </div>
          <div className="mt-20 ml-24">
            <Image
              src="/images/iphone_frame_1.svg"
              alt="Mobile_png"
              width={700}
              height={650}
              priority
            />
          </div>
        </div>
    </>
}