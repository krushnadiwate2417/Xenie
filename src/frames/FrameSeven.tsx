import Image from "next/image"
import data from "@/utils/data.json";


const {imageOne,imageTwo,heading,subHeading,tagline} = data.frameSeven

export default function FrameSeven(){
    return <>
        <div className="relative flex w-full justify-between bg-purple-100 lg:z-0 ">
            <div className="absolute top-0 left-0 lg:static">
                <Image
                    src={imageOne}
                    alt="ellipses"
                    width={300}
                    height={300}
                    priority
                    className="w-32 h-32 opacity-50 lg:opacity-100 lg:w-[300px] lg:h-[300px]"
                />
            </div>
            <div className="relative z-10 py-2 lg:py-0 flex flex-col items-center gap-5 lg:gap-7 justify-center lg:z-0 w-full lg:w-fit">
                <div className="text-center">
                    <div className="lg:text-3xl text-xl px-2.5 lg:px-0 font-semibold text-[#453C89] mx-auto text-center">{heading}</div>
                    <div className="lg:text-lg text-sm mt-3 text-neutral-500">{subHeading}</div>
                </div>
                <div className="flex gap-4 lg:gap-6">
                    <button className="bg-[#453C89] cursor-pointer px-6 py-2.5 rounded-4xl text-xs text-white">
                        Start Free Trial
                    </button>
                    <button className="border-[#453C89] cursor-pointer border px-6 py-2.5 rounded-4xl text-xs">
                        Download App
                    </button>
                </div>
                <div className="lg:text-xl text-sm font-semibold text-red-400">{tagline}</div>
            </div>
            <div className=" absolute bottom-0 right-0 lg:static lg:mt-16 lg:z-0">
                <Image
                    src={imageTwo}
                    alt="ellipses"
                    width={300}
                    height={300}
                    priority
                    className="w-32 opacity-50 h-32 lg:opacity-100 lg:w-[300px] lg:h-[300px] "
                />
            </div>
        </div>
    </>
}