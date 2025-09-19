import data from "@/utils/data.json";

const {frameEight} = data;

export default function FooterFoot(){
    return <>
        <div className="flex ml-32 mr-44 justify-between mt-3.5 mb-3 border-b pb-3 items-baseline-last">
            <div>
                <button className="bg-[#3c8957] rounded-full py-2 px-4 text-xl">&uarr;</button>
            </div>
            <div>
                <div className="text-[10px] text-neutral-400 mb-2">CONTACT</div>
                <div className="text-xs  text-white">{frameEight.mobileNumber}</div>
            </div>
            <div className="me-60">
                <div className="text-[10px] text-neutral-400 mb-2">EMAIL</div>
                <div className="text-xs text-white">{frameEight.email}</div>
            </div>
            <div>
                <div className="text-[10px] text-neutral-400 mb-2">ADDRESS</div>
                <div className="text-xs text-white max-w-xs">{frameEight.address}</div>
            </div>
        </div>
        <div className="text-white text-[8px] ml-32 mb-14">
            &#169; {frameEight.rights}
        </div>
    </>
}