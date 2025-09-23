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
import MobileHeader from "@/components/MobileHeader";

export default function Home() {
  return (
    <div className="scrollbar-hide overflow-y-scroll">
      <div className="relative h-screen md:h-fit lg:h-fit w-full">
        <Image
          src="/images/frame_1_overlay.svg"
          alt="linear"
          fill
          priority
          className="object-cover hidden lg:flex md:flex"
        />
        <Image
          src="/images/mobile_frame_1_overlayy.png"
          alt="linear"
          fill
          priority
          className="object-cover h-screen flex lg:hidden md:hidden"
        />
        <Image
          src="/images/frame_1_bg.png"
          alt="Background"
          fill
          priority
          className="object-cover hidden lg:flex md:flex"
        />
        <Image
          src="/images/mobile_frame_1_bg.png"
          alt="Background"
          fill
          priority
          className="object-cover h-screen flex lg:hidden md:hidden"
        />


        <div>
          <div className="fixed top-0 left-0 w-full mt-6 z-50 justify-center hidden lg:flex md:flex">
            <Header />
          </div>
          <div className="fixed top-0 left-0 w-full mt-6 z-50 justify-center flex lg:hidden md:hidden">
            <MobileHeader/>
          </div>
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
    </div>
  );
}
