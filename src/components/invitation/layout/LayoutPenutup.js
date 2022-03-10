import React from "react";
import { useSelector } from "react-redux";
import { AnimationSnowClean } from "../../../components";

function LayoutPenutupDefault({ data, slideIndex }) {
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);
  return (
    <div
      className={`slide-penutup absolute top-0 bottom-0 right-0 left-0 px-10 ${
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
          className={`relative  top-[0px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-500"
          }`}
        >
          {data.teksPenutup}
        </div>
        <div
          className={`relative  top-[20px] ${style.ayat} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-1500"
          }`}
        >
          {data.teksAyat}
        </div>
        <div
          className={`relative  top-[30px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-2500"
          }`}
        >
          <em>{data.teksSalamPenutup}</em>
        </div>
        <div
          className={`relative  top-[40px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-3000"
          }`}
        >
          {data.teksKamiYangBerbahagia}
        </div>
        <div
          className={`relative  top-[40px] ${style.namaMempelai} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-3500"
          }`}
        >
          {data.namaWanita} & {data.namaPria}
        </div>

        <div
          className={`relative  top-[40px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-4000"
          }`}
        >
          {data.teksKelPria}
        </div>
        <div
          className={`relative  top-[40px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-4500"
          }`}
        >
          {data.teksKelWanita}
        </div>
      </div>
    </div>
  );
}

export default LayoutPenutupDefault;
