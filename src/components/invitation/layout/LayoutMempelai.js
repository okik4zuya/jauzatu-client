import React from "react";
import { useSelector } from "react-redux";
import { AnimationSnowClean } from "../../../components";

export default function LayoutMempelai({ data, slideIndex }) {
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);

  return (
    <div
      className={`slide-mempelai absolute top-0 bottom-0 right-0 left-0 px-10 ${
        global.slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <AnimationSnowClean slideIndex={slideIndex} />
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[17vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative  ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-500"
          } `}
        >
          <img
            className='w-3/4 mx-auto'
            src='https://www.freepnglogos.com/uploads/bismillah-png/bismillahirrahmanirrahim-lahiask-12.png'
            alt=''
          />
        </div>
        <div
          className={`relative ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-1000"
          }`}
        >
          {data.teksSalamPembuka}
        </div>
        <div
          className={`relative top-[5px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-1500"
          }`}
        >
          {data.teksPendahuluan}
        </div>
        <div
          className={`relative  top-[10px] ${style.namaMempelai} ${
            global.slide === slideIndex &&
            "animate-fadeInDown animation-delay-2000"
          }`}
        >
          {data.namaLengkapPria}
        </div>
        <div
          className={`relative top-[10px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-2000"
          }`}
        >
          {data.teksOrangTuaPria}
        </div>
        <div
          className={`relative top-[10px] ${style.namaMempelai} ${
            global.slide === slideIndex && "animate-zoomIn animation-delay-2500"
          }`}
        >
          &
        </div>
        <div
          className={`relative  top-[10px] ${style.namaMempelai} ${
            global.slide === slideIndex &&
            "animate-fadeInDown animation-delay-3000"
          }`}
        >
          {data.namaLengkapWanita}
        </div>
        <div
          className={`relative top-[10px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-3000"
          }`}
        >
          {data.teksOrangTuaWanita}
        </div>
      </div>
    </div>
  );
}
