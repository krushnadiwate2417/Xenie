import Header from "@/components/Header";
import FrameOne from "@/frames/FrameOne";
import FrameTwo from "@/frames/FrameTwo";
import FrameFive from "@/frames/FrameFive";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <div className="relative h-fit w-full">
        <Image
          src="/images/frame_1_bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full mt-6 z-50 flex justify-center">
          <Header />
        </div>

        {/* Main Content */}
        <FrameOne/>
      </div>
        <FrameTwo/>
        <FrameFive/>
    </>
  );
}
