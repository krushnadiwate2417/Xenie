import Scroller from "@/components/Scroller"
import Image from "next/image"
import data from "@/utils/data.json";

const {genieImage,lampImage} = data.frameThree;

export default function FrameThree(){
    return <>
        <div className="
        md:grid md:grid-cols-2 md:mb-16 md:pt-24
        lg:grid lg:grid-cols-2 lg:mb-16 lg:pt-24">
            <div className="flex justify-center px-2 md:px-0 md:pb-0 lg:px-0 pb-14 lg:pb-0">
                <Scroller/>
            </div>
            <div className="hidden md:flex lg:flex justify-end-safe items-baseline-last">
                <div>
                    <div className="w-[150px] h-[150px] mb-28 mr-[12.5rem]">
                        <Image
                            src={genieImage}
                            alt="genie"
                            priority
                            width={300}
                            height={300}
                            className="animate-fadeIn"
                        />
                    </div>
                    <div className="flex justify-self-end ">
                        <Image
                            src={lampImage}
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