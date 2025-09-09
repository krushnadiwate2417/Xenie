import Image from "next/image"


export default function CarouselCard(){
    return <>
        <div className=" bg-white py-4 pl-4 pr-32 rounded-3xl text-black flex">
            <div>
                <Image 
                    src="/images/HumanImage_frame_4.png"
                    alt="Customer"
                    priority
                    width={200}
                    height={700}
                    className="w-[220px] h-[250px]"
                />
            </div>
            <div className="grid grid-rows-2 ml-5 ">
                <div className="self-center">
                    <div className="font-bold text-xl mb-2">Rajendra</div>
                    <div className="text-sm text-neutral-400">Delhi Retailer</div>
                </div>
                <div className="max-w-48 text-sm text-neutral-400">“Being able to speak and see invoices pop up is game-changing.”</div>
            </div>
        </div>
    </>
}