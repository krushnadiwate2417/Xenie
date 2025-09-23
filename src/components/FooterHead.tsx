import Image from "next/image"
import data from "@/utils/data.json"

const imagesUrl = data.frameEight.socialMedia;

export default function FooterHead(){
    return <>
        <div className=" flex justify-evenly items-center lg:justify-between  mb-9 md:mx-10 md:justify-between lg:mx-32 border-b border-b-white">
            <div className="lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[150px] h-[130px] w-[130px] relative">
                <Image
                    src={data.frameEight.logo}
                    alt="Main_Logo"
                    priority
                    fill
                    className="object-contain"
                />
            </div>
            <div className="lg:flex lg:gap-3 md:flex md:gap-3 grid grid-cols-2 grid-rows-2 gap-2 pr-2.5">
                {imagesUrl.map((url=>(
                    <div key={url} className="border border-neutral-400 rounded-full cursor-pointer">
                        <Image
                            src={url}
                            alt="social_media_logo"
                            width={45}
                            height={45}
                            priority
                        />
                    </div>
                )))}
            </div>
        </div>
    </>
}