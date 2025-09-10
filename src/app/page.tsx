import Header from "@/components/Header";
import FrameOne from "@/frames/FrameOne";
import FrameTwo from "@/frames/FrameTwo";
import FrameFive from "@/frames/FrameFive";
import Image from "next/image";
import FrameSeven from "@/frames/FrameSeven";
import FrameEight from "@/frames/FrameEight";
import FrameFour from "@/frames/FrameFour";
import FrameSix from "@/frames/FrameSix";
import FrameThree from "@/frames/FrameThree";

export default function Home() {
  return (
    <>
      <div className="relative h-fit w-full">
        <Image
          src="/images/frame_1_bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />


        <div className="fixed top-0 left-0 w-full mt-6 z-50 flex justify-center">
          <Header />
        </div>

        <FrameOne/>
      </div>
        <FrameTwo/>
        <FrameThree/>
        <FrameFour/>
        <FrameFive/>
        <FrameSix/>
        <FrameSeven/>
        <FrameEight/>
    </>
  );
}
