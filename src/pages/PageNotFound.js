import React from "react";

export default function PageNotFound() {
  return (
    <div className='relative h-screen w-screen'>
      <div className='absolute px-12 top-1/2 left-1/2 w-full sm:w-[600px] h-[400px] bg-gold transform -translate-x-1/2 -translate-y-1/2'>
        <div className='text-center relative top-1/2 transform -translate-y-1/2 text-5xl font-montserrat font-bold text-white'>
          PAGE NOT FOUND
        </div>
      </div>
    </div>
  );
}
