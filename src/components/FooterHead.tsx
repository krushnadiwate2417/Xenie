import Image from "next/image"

const imagesUrl : string[]=[
    "/images/facebook.png",
    "/images/insta.png",
    "/images/youtube.png",
    "/images/telegram.png",
]

export default function FooterHead(){
    return <>
        <div className=" flex justify-between mt-14 mb-9 pb-10 mx-32 border-b border-b-white">
            <div className="text-5xl text-white">
                LOGO
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