import Image from "next/image";

interface faqs {
    question : string,
    answer : string
}

export default function QuestionCard({question,answer} : faqs){
    return <>
        <div className="grid grid-rows-2 rounded-2xl p-9 text-white bg-[#F47C8B]">
            <div className="flex justify-between items-center">
                <div className="font-semibold">{question}</div>
                <div className="p-0 rounded-sm cursor-pointer  bg-white text-[#F47C8B]">
                    <Image 
                        src="/images/Add.png"
                        alt="add"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className="text-xs max-w-xs">
                {answer}
            </div>
        </div>
    </>
}