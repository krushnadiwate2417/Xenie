import Image from "next/image"


export default function FrameSeven(){
    return <>
        <div className="flex w-full justify-between bg-purple-200">
            <div>
                <Image
                    src="/images/Ellipses_frame_7_left.png"
                    alt="ellipses"
                    width={300}
                    height={300}
                    priority
                />
            </div>
            <div className="flex flex-col items-center gap-7 justify-center">
                <div className="text-center">
                    <div className="text-3xl font-semibold text-[#453C89]">Start using XenieBooks Billing Software Today</div>
                    <div className="text-lg mt-3 text-neutral-500">Sign Up & Try Xenie - Free For 7 Days!</div>
                </div>
                <div className="flex gap-6">
                    <button className="bg-[#453C89] cursor-pointer px-6 py-2.5 rounded-4xl text-xs text-white">
                        Start Free Trial
                    </button>
                    <button className="border-[#453C89] cursor-pointer border px-6 py-2.5 rounded-4xl text-xs">
                        Download App
                    </button>
                </div>
                <div className="text-xl font-semibold text-red-400">Stay Vocal. Stay Compliant. Grow Smarter.</div>
            </div>
            <div className="self-end mt-16">
                <Image
                    src="/images/Ellipses_frame_7_right.png"
                    alt="ellipses"
                    width={300}
                    height={300}
                    priority
                />
            </div>
        </div>
    </>
}