"use client";

import { useState } from "react";
import data from "@/utils/data.json";

const {scoll} = data.frameThree;
// interface Scroll {
//     heading : string,
//     subHedading : string
// }

// const scoll : Scroll[] = [
//     {heading : "Mobile-First & Multi Platform 1", subHedading : "Manage your business on the go using Android, iOS, or desktop. Voice features work seamlessly across all platforms."},
//     {heading : "User-Friendly Interface", subHedading : "Intuitive, clean design tailored for MSMEs ensures you can navigate quickly—no technical training needed."},
//     {heading : "Automation & Insightful Reporting", subHedading : "Minimize manual errors with automation. Get detailed reports to make smarter,faster decisions."},
//     {heading : "Change-Proof", subHedading : "Always upto date with latest GST reforms and statutory updates."},
// ]


export default function Scroller(){

    const [scrollNumber,setScrollNumber] = useState(0);

    return <>
        
        <div className="flex flex-col gap-28">
            <div className="text-2xl pl-5 text-[#453C89] max-w-72 font-bold">Features Designed for 
                <span className="text-[#F47C8B]"> India’s SMBs</span> 
            </div>
            <div className="flex gap-8 items-center">
                <div className="flex flex-col gap-4 items-center">
                    <div className="text-xl font-bold text-[#453C89]">0{(scrollNumber % scoll.length) + 1}</div>
                    <div className="w-1.5 h-80 rounded-2xl" 
                         style={{ background: `linear-gradient(to bottom, #453C89 ${((scrollNumber % scoll.length) + 1) * 25}%, #e5e7eb ${((scrollNumber % scoll.length) + 1) * 25}%)`}}>
                    </div>
                    <div className="text-xl font-bold text-neutral-500">04</div>
                </div>
                <div className="cursor-pointer flex flex-col gap-20 pb-14 " onClick={()=>{setScrollNumber(curr=>curr+1)}}>
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-bold">{scoll[scrollNumber % scoll.length].heading}</div>
                        <div className="text-sm text-neutral-400 max-w-[30rem]">{scoll[scrollNumber % scoll.length].subHedading}</div>
                    </div>
                    <div className="flex flex-col gap-3 opacity-30">
                        <div className="text-xl font-bold">{scoll[(scrollNumber + 1)% scoll.length].heading}</div>
                        <div className="text-sm text-neutral-400 max-w-[30rem]">{scoll[(scrollNumber + 1)% scoll.length].subHedading}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}