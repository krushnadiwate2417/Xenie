"use client";

import Image from "next/image"
import { useState } from "react";
import data from "@/utils/data.json";

const {objectives} = data.frameTwo;

// interface Objectives{
//     leftImageID : string,
//     heading : string,
//     subHeading : string,
//     rightImage : string,
//     bgColor : string,
//     hex : string
// }

// const objectives : Objectives[] = [
//     {leftImageID : "/images/Ellipse_1_frame_2.svg", heading : "Make Your Bussiness Vocal", subHeading : "India speaks many languages—and Xenie understands them. Navigate invoicing, stock, customers, and reports by speaking your commands. No typing. Just speak.",rightImage : "/images/One_frame_2.svg", bgColor : "(255,181,49,0.6)", hex :"#FACC15"},
    
//     {leftImageID : "/images/Ellipse_2_frame_2.svg", heading : "Simplified GST Compliance & Invoicing", subHeading : "Generate GST-compliant invoices and e-way bills quickly, with accurate tax calculations. Stay compliant with continuously updated regulations.",rightImage : "/images/Two_frame_2.svg",bgColor : "(114, 99, 177, 1)",hex : "#7263B1"},

//     {leftImageID : "/images/Ellipse_3_frame_2.svg", heading : "Manage Inventory with Ease", subHeading : "Check available stock, ask for reorder levels, or track items at party- and product-level all via voice.",rightImage : "/images/Three_frame_2.svg",bgColor : "(244, 124, 139, 1)",hex : "#F47C8B"},

//     {leftImageID : "/images/Ellipse_4_frame_2.svg", heading : "Smart Business Assistant", subHeading : "Xenie is more than software. It’s your voice-enabled business partner that provides: Real-time insights on sales trends and inventory needs \n Best-performing products or services  Identification of top customers and logistical cost optimization  Compliance with GST regulations—by simply asking",rightImage : "/images/Four_frame_2.svg", bgColor: "(185, 218, 178, 1)", hex : "#B9DAB2"},

//     {leftImageID : "/images/Ellipse_5_frame_2.svg", heading : "Full Business Suite", subHeading : "Voice or tap to access features like: Sales and purchase invoicing Cash and bank reconciliation Expense, order, and payment tracking Barcode scanning and customized invoice templates E-way bill and e-invoice generation Delivery challan support",rightImage : "/images/Five_frame_2.svg",bgColor: "(69, 60, 137, 1)",hex : "#453C89"},

// ] 


export default function FrameTwo(){

    const [component,setComponent] = useState(0);
    
    function handleChange(){
        setComponent(curr=>((curr+1)%objectives.length));
    }

    return (
        <div className="relative w-full h-full cursor-pointer" onClick={handleChange}>
            <div className="absolute top-0 left-0 w-full h-18 bg-gradient-to-b from-yellow-400/60 to-transparent pointer-events-none" 
             style={{ 
                background: `linear-gradient(to bottom, rgba${objectives[component].bgColor}, transparent)` 
            }}
            />

            <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 relative z-10">
                <div className={`hidden md:flex lg:flex ${objectives[component].leftImageID === "/images/Ellipse_1_frame_2.svg" ?"ml-[-7rem]":"ml-[-14.5rem]"}`}>
                    <Image
                        src={objectives[component].leftImageID}
                        alt="Elllipse"
                        height={objectives[component].leftImageID === "/images/Ellipse_1_frame_2.svg" ?380:500}
                        width={objectives[component].leftImageID === "/images/Ellipse_1_frame_2.svg" ?380:500}
                        priority
                    />
                </div>

                <div className="flex flex-col items-center md:items-start lg:items-start justify-center py-20 md:py-0 md:px-0 lg:py-0 gap-4 px-4 lg:px-0">
                    <div className={`text-2xl font-bold text-center md:text-left lg:text-left`}
                        style={{
                            color : `${objectives[component].hex}`
                        }}
                    >
                        {objectives[component].heading}
                    </div>
                    <div className="text-[#4472C4] text-center md:text-left lg:text-left leading-5 text-base md:pr-20 lg:pr-20">
                        {objectives[component].subHeading}
                    </div>
                    <div>
                        <button className="bg-indigo-950 text-neutral-50 px-5 py-2.5 rounded-3xl cursor-pointer text-sm">Learn More</button>
                    </div>
                </div>

                <div className={`m-0 lg:flex md:flex items-center justify-end hidden ${!(objectives[component].rightImage === "/images/One_frame_2.svg") && "md:mr-[-4rem] lg:mr-[-6rem]"} `}>
                    <Image
                        src={objectives[component].rightImage}
                        alt="ZeroOne"
                        height={objectives[component].rightImage === "/images/One_frame_2.svg" ?450:600}
                        width={objectives[component].rightImage === "/images/One_frame_2.svg" ?450:600}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
