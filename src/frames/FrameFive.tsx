"use client";

import Card, { EnhancedCard } from "@/components/Card"
import OfferingCard from "@/components/OfferingCard";
import data from "@/utils/data.json";

export default function FrameFive(){

    const {dummyData} =  data.frameFive;

    const BestSellerCard = EnhancedCard(Card)

    return <>
        <div className="bg-neutral-100 pb-11">
            <div className="flex flex-col text-center lg:text-left justify-center items-center gap-5 lg:mb-0 mb-6 lg:px-0 px-1.5">
                <div className="text-2xl  lg:text-3xl font-bold mt-20">Simplify your business operation with <span className="text-[#453C89]">XenieBooks</span> </div>
                <div className="text-neutral-600 text-xs lg:text-sm ">Choose a plan that suits your business, and we'll support you every step of the way.</div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-5 lg:flex-row lg:gap-7 lg:justify-center lg:items-center">
                {dummyData.map((obj)=>(
                    <div className={` mb-10 lg:mb-16 lg:mt-14 `} key={obj.league}>
                        {
                            obj.bestSeller
                            ?
                            <BestSellerCard
                                heading={obj.league}
                                plan={obj.plan}
                                price={obj.price}
                                desc={obj.description}
                                isBest={obj.bestSeller}
                            />
                            :
                            <Card
                            heading={obj.league}
                            plan={obj.plan}
                            price={obj.price}
                            desc={obj.description}
                            isBest={obj.bestSeller}
                        />
                        }
                    </div>
                ))}
            </div>
            <div>
                <OfferingCard/>
            </div>
        </div>

    </>
}