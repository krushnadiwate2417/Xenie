import Image from "next/image"
import data from "@/utils/data.json";

const {offerings,offeringHeading,offeringTagline} = data.frameFive;

export default function OfferingCard(){
    return <>
        <div className="w-fit bg-white grid gap-8 justify-items-center justify-self-center rounded-4xl px-4 py-10 md:px-24 md:py-10  lg:px-44 lg:py-10">
            <div className="text-2xl text-center lg:text-3xl font-bold">
                {offeringHeading}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-6 md:gap-x-10 gap-x-12 lg:gap-x-12 md:gap-y-2.5 gap-y-3.5 lg:gap-y-3.5 md:text-xs text-[15px] lg:text-[15px]">
                {offerings.map(vals => (
                <div key={vals} className="flex gap-2.5 items-center">
                   <Image
                    src="/images/check.svg"
                    alt="check"
                    width={25}
                    height={25}
                   /> {vals}</div>
                ))}
            </div>

            <div className="text-sm lg:text-sm md:text-xs md:max-w-xl text-neutral-500 text-center lg:max-w-2xl">
                {offeringTagline}
            </div>
        </div>
    </>
}