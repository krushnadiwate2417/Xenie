"use client";

import Image from "next/image";
import { useState } from "react";

interface faqs {
    question : string,
    answer : string
}

export default function QuestionCard({question,answer} : faqs){

    const [expand,setExpand] = useState(true);

    return <>
        <div className={`flex flex-col rounded-2xl gap-3.5 w-xl justify-center p-8 ${ expand ? "bg-white text-[#F47C8B] h-[5.5rem]": "text-white bg-[#F47C8B]"}`}>
            <div className="flex justify-between items-center">
                <div className="font-semibold text-xl ">{question}</div>
                <div 
                className={`p-1 rounded-sm cursor-pointer ${ expand ? "bg-neutral-200" : "bg-white"}`}
                onClick={()=>setExpand((curr)=>!curr)}
                >
                    <Image 
                        src={expand ? "/images/Add.png" : "/images/minus.svg"}
                        alt="add"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className={`text-[0.9rem] max-w-sm overflow-hidden transition-all duration-300 ease-in-out ${!expand ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                {answer}
            </div>
        </div>
    </>
}