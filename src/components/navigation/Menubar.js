import React from "react";
import { Drawer } from "../";
import { Image } from "@chakra-ui/react";

export default function Menubar() {
  return (
    <div>
      <div className='fixed top-0 h-[100px] w-screen bg-gold'>
        <div className=' absolute left-[10px] top-1/2 transform -translate-y-1/2 sm:left-[100px] '>
          <Image
            boxSize='80px'
            src='https://jauzatu.netlify.app/logo-jauzatu-gold.png'
            alt=''
          />
          <div className='text-white absolute left-[70px] top-1/2 transform -translate-y-1/2 sm:left-[200px] text-3xl sm:text-5xl font-greatVibes'>
            Jauzatu
          </div>
        </div>
        <div className='absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2'>
          <Drawer />
        </div>
      </div>
    </div>
  );
}
