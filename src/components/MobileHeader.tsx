"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu,HiX } from "react-icons/hi";

export default function MobileHeader() {

    const[isOpen,setIsOpen] = useState(false);

  return (
    <>
        <div className="shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-white flex justify-between items-center w-full py-2 px-3 mx-2.5 rounded-3xl">
   
            <div className="flex-shrink-0">
                <Image
                src="/images/Main_Logo.svg"
                alt="Main_Logo"
                width={100}
                height={100}
                priority
                />
            </div>

            <button className="p-0 m-0 flex-shrink-0" onClick={()=>setIsOpen(true)}>
                <HiOutlineMenu size={25} />
            </button>
        </div>
        {
        isOpen 
        && 
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white p-6 flex flex-col gap-6 shadow-lg">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <HiX size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-base">
              <h2>Features</h2>
              <h2>Pricing</h2>
              <h2>Blogs</h2>
              <h2>Resources</h2>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <button>Sign in</button>
              <button className="bg-[#453C89] text-white py-2 px-5 rounded-3xl font-inter">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
        }
    </>
  );
}
