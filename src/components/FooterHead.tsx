import Image from "next/image"
import data from "@/utils/data.json"

const imagesUrl = data.frameEight.socialMedia;

export default function FooterHead(){
    return <>
        <div className=" flex justify-between mt-14 mb-9 pb-10 mx-32 border-b border-b-white">
            <div>
                <Image
                    src={data.frameEight.logo}
                    alt="Main_Logo"
                    width={150}
                    height={150}
                    priority
                />
            </div>
            <div className="flex gap-3">
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