import Image from "next/image"
import data from "@/utils/data.json";

const {contentOne,contentTwo,headingOne,headingTwo,subHeading,tagline} = data.frameOne;


export default function FrameOne(){
    return <>
        <div className="relative z-20
        flex flex-col
        md:grid md:grid-cols-2 md:justify-center md:items-center md:h-full
        lg:grid lg:grid-cols-2 lg:justify-center lg:items-center lg:h-full">
          <div className="flex h-screen md:h-fit md:m-0 lg:h-fit relative lg:m-0">
            <div>
              <Image
              src="/images/grids_frame_1.svg"
              alt="grid"
              width={650}
              height={650}
              priority
              className="object-cover hidden lg:flex md:flex"
              />
            </div>
            <div className="absolute inset-0 text-neutral-50 flex flex-col justify-center items-center self-center gap-9
            md:items-start md:mt-[90px] md:pl-16 md:gap-8
            lg:items-start lg:mt-[90px] lg:pl-24">
              <div className="flex flex-col gap-2 md:gap-1 font-semibold text-center md:text-left  lg:text-left">
                <div className="text-yellow-500 text-4xl md:text-3xl lg:text-5xl">{headingOne}</div>
                <div className="md:max-w-sm md:leading-11 md:text-3xl  lg:max-w-xl lg:leading-14 text-2xl lg:text-5xl">{headingTwo}</div>

              </div>
              <div className="text-neutral-400 text-center md:text-left lg:text-left text-sm lg:text-lg lg:w-fit lg:pr-24 lg:leading-6
              md:text-[0.9rem] md:w-fit md:pr-0 md:leading-6">
                {subHeading}
              </div>
              <div className="flex lg:gap-5 gap-3 text-[0.6rem] md:text-xs md:gap-4 lg:text-sm">
                <div>
                  {contentOne}
                </div>
                <div>
                  {contentTwo}
                </div>
              </div>
              <div className="flex gap-5 text-xs md:text-[10px] lg:text-[12px]">
                <button className="rounded-3xl border cursor-pointer border-white px-8 py-3">Download App</button>
                <button className="rounded-3xl border cursor-pointer border-white px-5 py-3 bg-[#453C89]">Start 7 Day Free Trial</button>
              </div>
              <div className="text-xs text-center md:text-left lg:text-left">
                {tagline}
              </div>
            </div>
          </div>
          <div className="relative hidden 
             md:flex md:mt-20 md:ml-10 md:w-[29rem] md:h-[29rem]
             lg:flex lg:mt-24 lg:ml-40 lg:w-[38rem] lg:h-[35rem]">
            <Image
              src="/images/iphone_frame_1.svg"
              alt="Mobile_png"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
    </>
}