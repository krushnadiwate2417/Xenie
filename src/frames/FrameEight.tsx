import FooterFoot from "@/components/FooterFoot";
import FooterGrid from "@/components/FooterGrid";
import FooterHead from "@/components/FooterHead";
import Image from "next/image";


export default function FrameEight(){
    return <>
        <div className="relative bg-gradient-to-br from-[#7c6cef] to-[#241d5d] w-full overflow-hidden">
                <Image
                    src="/images/Ellipses_frame_8.png"
                    alt="Ellipse"
                    width={280}
                    height={280}
                    priority
                    className="object-contain absolute bottom-0 right-0 z-0"
                />
                <div className="relative">
                    <FooterHead/>
                    <FooterGrid/>
                    <FooterFoot/>
                </div>
        </div>
    </>
}