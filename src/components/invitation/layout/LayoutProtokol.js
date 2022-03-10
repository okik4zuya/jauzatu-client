import React from "react";
import { useSelector } from "react-redux";
import { AnimationSnowClean } from "../../../components";
import { MdMasks, MdOutlineCleanHands, MdSocialDistance } from "react-icons/md";
import { FaTemperatureHigh, FaHandshakeAltSlash } from "react-icons/fa";

export default function LayoutProtokol({ slideIndex }) {
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);
  return (
    <div
      className={`slide-protokol absolute top-0 bottom-0 right-0 left-0 px-10 ${
        global.slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
        <AnimationSnowClean slideIndex={slideIndex} />
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[16vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative top-[0px] ${style.judul}
              ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-500"
              } `}
        >
          Protokol Kesehatan
        </div>

        <div
          className={`relative top-[30px] ${style.paragraf}
              ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-1500"
              } `}
        >
          Seluruh tamu undangan diharapkan untuk senantiasa menjaga protokol
          kesehatan berikut ini.
        </div>
        <div className='relative top-[50px] grid grid-cols-2 gap-4 py-2 '>
          <div className='col-span-1  text-center'>
            <div
              className={`relative w-[60px] h-[60px] rounded-full bg-white mx-auto ${
                style.thumbActive
              } ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-1000"
              }`}
            >
              <MdMasks
                size={40}
                className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
              />
            </div>
            <div
              className={`${style.paragraf} ${
                global.slide === slideIndex &&
                "animate-fadeInDown animation-delay-1500"
              }`}
            >
              Menggunakan Masker
            </div>
          </div>
          <div className='col-span-1  text-center '>
            <div
              className={`relative w-[60px] h-[60px] rounded-full bg-white mx-auto ${
                style.thumbActive
              } ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-1500"
              }`}
            >
              <MdOutlineCleanHands
                size={40}
                className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
              />
            </div>
            <div
              className={`${style.paragraf} ${
                global.slide === 5 && "animate-fadeInDown animation-delay-2000"
              }`}
            >
              Menggunakan Hand Sanitizer
            </div>
          </div>
        </div>
        <div className='relative top-[50px] grid grid-cols-2 gap-4 py-2 '>
          <div className='col-span-1  text-center'>
            <div
              className={`relative w-[60px] h-[60px] rounded-full bg-white mx-auto ${
                style.thumbActive
              } ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-2000"
              }`}
            >
              <FaTemperatureHigh
                size={40}
                className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
              />
            </div>
            <div
              className={`${style.paragraf} ${
                global.slide === slideIndex &&
                "animate-fadeInDown animation-delay-2500"
              }`}
            >
              Cek Temperatur
            </div>
          </div>
          <div className='col-span-1  text-center '>
            <div
              className={`relative w-[60px] h-[60px] rounded-full bg-white mx-auto ${
                style.thumbActive
              } ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-2500"
              }`}
            >
              <MdSocialDistance
                size={40}
                className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
              />
            </div>
            <div
              className={`${style.paragraf} ${
                global.slide === 5 && "animate-fadeInDown animation-delay-3000"
              }`}
            >
              Menjaga Jarak
            </div>
          </div>
        </div>
        <div className='relative top-[50px]  py-2 '>
          <div className=' w-1/2 mx-auto text-center'>
            <div
              className={`relative w-[60px] h-[60px] rounded-full bg-white mx-auto ${
                style.thumbActive
              } ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-3000"
              }`}
            >
              <FaHandshakeAltSlash
                size={40}
                className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  `}
              />
            </div>
            <div
              className={`${style.paragraf} ${
                global.slide === slideIndex &&
                "animate-fadeInDown animation-delay-3500"
              }`}
            >
              Tidak Bersalaman
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
