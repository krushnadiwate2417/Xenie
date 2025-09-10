import Scroller from "@/components/Scroller"
import Image from "next/image"


export default function FrameThree(){
    return <>
        <div className="grid grid-cols-2 mb-16 pt-24">
            <div className="flex justify-center">
                <Scroller/>
            </div>
            <div className="flex justify-end-safe items-baseline-last">
                <div>
                    <div className="w-[150px] h-[150px] mb-28 mr-[12.5rem]">
                        <Image
                            src="/images/genie_frame_3.png"
                            alt="genie"
                            priority
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="flex justify-self-end">
                        <Image
                            src="/images/lamp_frame_3.png"
                            alt="lamp"
                            priority
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}