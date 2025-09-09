import FooterHead from "@/components/FooterHead";
import Image from "next/image";


export default function FrameEight(){
    return <>
        <div className="relative bg-gradient-to-br from-[#7c6cef] to-[#453C89] w-full overflow-hidden">
                <Image
                    src="/images/Ellipses_frame_8.png"
                    alt="Ellipse"
                    width={300}
                    height={300}
                    priority
                    className="object-contain absolute bottom-0 right-0 z-0"
                />
                <div className="relative">
                    <FooterHead/>
                </div>
        </div>
    </>
}