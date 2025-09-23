import QuestionCard from "@/components/QuestionCard";
import data from "@/utils/data.json";

// interface FAQ {
//   question: string;
//   answer: string;
// }
  const {faqs,heading} = data.frameSix

//: FAQ[] = [
//   {
//     question: "What is XenieBooks ?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "Which languages does Xenie support?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "What devices can I use Xenie on?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "How much does Xenie Books cost?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "Why Small Businesses Need Billing Software",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "How does voice-based management work?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "Is Xenie Books GST complaint?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "How secure is my data?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "What if I face issues or need help?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   },
//   {
//     question: "What if I face issues or need help?",
//     answer: "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
//   }
// ];

export default function FrameSix(){
    return <>
        <div className="bg-neutral-100 pb-16 px-5 lg:px-0">
            <div className="lg:mx-36">
                <div className="text-2xl text-center font-semibold  mb-10">
                    {heading.split(" ").slice(0,heading.length-1).join(" ")} <span className="text-[#453C89]"> {heading.split(" ")[heading.length-1]} </span>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-6 md:grid md:grid-cols-2 md:gap-6">
                  <div className="flex flex-col gap-6 pb-6 lg:pb-0">
                      {faqs.slice(0,5).map((obj,idx)=>(
                        <div key={idx}><QuestionCard question={obj.question} answer={obj.answer} /></div>
                    ))}
                    </div>
                    <div className="flex flex-col gap-6">
                      {faqs.slice(5,10).map((obj,idx)=>(
                        <div key={idx}><QuestionCard question={obj.question} answer={obj.answer} /></div>
                    ))}
                    </div>
                </div>
                    
            </div>
        </div>
    </>
}