import React from "react";
import { useSelector } from "react-redux";
import { AnimationSnowClean, ParticlesDefault } from "../../../components";

export default function LayoutCoverSnowClean({ data, slideIndex }) {
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);

  return (
    <div
      className={`slide-cover absolute top-0 bottom-0 right-0 left-0 ${
        global.slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <ParticlesDefault />
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[17vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative text-center top-[100px] sm:top-[70px] right-[50px] ${
            style.fontArt
          } text-[60px] sm:top-[220px] sm:text-[100px] sm:right-[100px] ${
            style.secondaryTextColor
          } ${
            global.slide === slideIndex &&
            "animate-fadeInRight animation-delay-1000"
          } `}
        >
          {data.namaPria}
        </div>

        <div
          className={`relative text-center top-[80px] left-[50px] ${
            style.fontArt
          } text-[60px] sm:top-[50px] sm:text-[100px] ${
            style.secondaryTextColor
          } ${
            global.slide === slideIndex &&
            "animate-fadeInLeft animation-delay-1000"
          } `}
        >
          {data.namaWanita}
        </div>

        <div
          className={`relative w-full text-center top-[200px] text-[30px] sm:top-[150px] font-montserrat sm:text-[50px] ${
            style.secondaryTextColor
          } ${
            global.slide === slideIndex &&
            "animate-fadeInDown animation-delay-1500"
          } `}
        >
          {data.teksTanggalDepan}
        </div>
      </div>
    </div>
  );
}
