import Image from "next/image"

interface Carousal{
    imgSrc : string,
    name : string,
    bussiness : string,
    testimonal : string
};



export default function CarouselCard({imgSrc,name,bussiness,testimonal}:Carousal){
    return <>
        <div className=" bg-white py-4 pl-4 md:py-4 md:pl-4 md:pr-32 lg:py-4 lg:pl-4 lg:pr-32 rounded-3xl text-black flex">
            <div>
                <Image 
                    src={imgSrc}
                    alt="Customer"
                    priority
                    width={200}
                    height={700}
                    className="lg:w-[220px] lg:h-[250px] md:w-[220px] md:h-[250px] w-[200px] h-[150px]"
                />
            </div>
            <div className="grid grid-rows-2 ml-5 ">
                <div className="self-center">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <div className="text-sm text-neutral-400">{bussiness}</div>
                </div>
                <div className="lg:max-w-48 pr-1.5 lg:pr-0 md:max-w-48  md:pr-0 text-sm text-neutral-400">“{testimonal}.”</div>
            </div>
        </div>
    </>
}