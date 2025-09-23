import data from "@/utils/data.json";

const {frameEight} = data;

export default function FooterFoot(){
    return <>
        <div className="flex flex-col mt-6 gap-5 pb-4 mb-2  pl-5 md:pl-0 md:flex-row md:mx-3  lg:pl-0 lg:flex-row lg:ml-32 lg:mr-44 justify-between lg:mt-3.5 lg:mb-3 border-b lg:pb-3 lg:items-baseline-last md:mt-3.5 md:mb-3  md:pb-3 md:items-baseline-last">
            <div>
                <button className="bg-[#3c8957] hidden md:flex lg:flex rounded-full py-2 px-4 text-xl">&uarr;</button>
            </div>
            <div>
                <div className="text-[10px] text-neutral-400 mb-2">CONTACT</div>
                <div className="text-xs  text-white">{frameEight.mobileNumber}</div>
            </div>
            <div className="">
                <div className="text-[10px] text-neutral-400 mb-2">EMAIL</div>
                <div className="text-xs text-white">{frameEight.email}</div>
            </div>
            <div>
                <div className="text-[10px] text-neutral-400 mb-2">ADDRESS</div>
                <div className="text-xs text-white max-w-xs">{frameEight.address}</div>
            </div>
        </div>
        <div className="text-white text-[8px] lg:ml-32 lg:mb-14 lg:text-left md:ml-5 md:mb-14 md:text-left text-center mb-3.5">
            &#169; {frameEight.rights}
        </div>
    </>
}