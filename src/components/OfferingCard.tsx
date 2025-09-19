import Image from "next/image"
import data from "@/utils/data.json";

const {offerings,offeringHeading,offeringTagline} = data.frameFive;

export default function OfferingCard(){
    return <>
        <div className="w-fit bg-white grid gap-8 justify-items-center justify-self-center rounded-4xl px-44 py-10">
            <div className="text-3xl font-bold">
                {offeringHeading}
            </div>

            <div className="grid grid-cols-3 grid-rows-6 gap-x-12 gap-y-3.5 text-[15px]">
                {offerings.map(vals => (
                <div key={vals} className="flex gap-2.5">
                   <Image
                    src="/images/check.svg"
                    alt="check"
                    width={25}
                    height={25}
                   /> {vals}</div>
                ))}
            </div>

            <div className="text-sm text-neutral-500 text-center max-w-2xl">
                {offeringTagline}
            </div>
        </div>
    </>
}