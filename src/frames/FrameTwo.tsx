import Image from "next/image"

export default function FrameTwo(){
    return <>
        <div className="grid grid-cols-3">
            <div className="">
            <Image
                src="/images/Ellipse_frame_2.png"
                alt="Elllipse"
                height={700}
                width={300}
                priority
                />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <div className="text-2xl font-bold text-yellow-500 ">
                    Make Your Bussiness Vocal
                </div>
                <div className="text-[#4472C4] leading-5 text-base pr-20">
                    India speaks many languages—and Xenie understands them. Navigate invoicing, stock, customers, and reports by speaking your commands. No typing. Just speak.
                </div>
                <div>
                    <button className="bg-indigo-950 text-neutral-50 px-5 py-2.5 rounded-3xl cursor-pointer text-sm">Learn More</button>
                </div>
            </div>
            <div className="m-0 flex items-center justify-end">
                <Image
                src="/images/zereOne_frame_2.png"
                alt="ZeroOne"
                height={450}
                width={450}
                priority
                />
            </div>
        </div>
    </>
}