import Image from "next/image"

interface Carousal{
    imgSrc : string,
    name : string,
    bussiness : string,
    testimonal : string
};



export default function CarouselCard({imgSrc,name,bussiness,testimonal}:Carousal){
    return <>
        <div className=" bg-white py-4 pl-4 pr-32 rounded-3xl text-black flex">
            <div>
                <Image 
                    src={imgSrc}
                    alt="Customer"
                    priority
                    width={200}
                    height={700}
                    className="w-[220px] h-[250px]"
                />
            </div>
            <div className="grid grid-rows-2 ml-5 ">
                <div className="self-center">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <div className="text-sm text-neutral-400">{bussiness}</div>
                </div>
                <div className="max-w-48 text-sm text-neutral-400">“{testimonal}.”</div>
            </div>
        </div>
    </>
}