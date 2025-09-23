import Image from "next/image";

export default function Header() {
  return (
    <div className="header flex w-full md:mx-20 lg:mx-24 bg-white md:py-3.5 md:px-12 md:justify-between lg:py-7 lg:px-20 items-center lg:justify-between shadow-[0_0_30px_rgba(0,0,0,3)]">
      {/* Logo */}
      <div>
        <div>
          <Image
            src="/images/Main_Logo.svg"
            alt="Main_Logo"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex md:gap-6 lg:gap-7 md:text-[0.65rem] lg:text-xs items-center">
        <div>
          <label>Features</label>
          <select></select>
        </div>
        <div>
          <h2>Pricing</h2>
        </div>
        <div>
          <h2>Blogs</h2>
        </div>
        <div>
          <label>Resources</label>
          <select></select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex md:gap-5 lg:gap-7 md:text-[0.65rem] lg:text-xs items-center">
        <button className="cursor-pointer">Sign in</button>
        <button className="cursor-pointer bg-[#453C89] text-white py-2.5 px-5 rounded-3xl font-inter">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}