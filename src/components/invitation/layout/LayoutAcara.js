import React from "react";
import { useSelector } from "react-redux";
import { AnimationSnowClean } from "../../../components";

function LayoutAcaraDefault({ data, slideIndex }) {
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);
  return (
    <div
      className={`slide-acara absolute top-0 bottom-0 right-0 left-0 px-10 ${
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
          className={`relative ${
            style.secondaryTextColor
          } font-montserrat font-semibold text-md text-center
              ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-1000"
              } `}
        >
          {data.teksBulan.toUpperCase()}
        </div>
        <div className='relative  '>
          <div
            className={`relative w-[60px] mx-auto  text-center text-[30px] font-montserrat font-bold  ${
              style.secondaryTextColor
            }  ${
              global.slide === slideIndex &&
              "animate-fadeInUp animation-delay-2000"
            } 
              `}
          >
            <div
              className={`absolute top-0 left-0 bottom-0 w-px ${style.secondaryBgColor} `}
            ></div>
            <div>{data.teksTanggalAkad}</div>
            <div
              className={`absolute top-0 right-0 bottom-0 w-px ${style.secondaryBgColor} `}
            ></div>
          </div>
          <div
            className={`absolute ${
              style.secondaryTextColor
            } top-[calc(50%-13px)] right-[calc(50%+40px)] text-lg  font-montserrat ${
              global.slide === slideIndex &&
              "animate-fadeInRight animation-delay-2000"
            }`}
          >
            {data.teksHariAkad.toUpperCase()}
          </div>

          <div
            className={`absolute ${
              style.secondaryTextColor
            } top-[calc(50%-13px)] left-[calc(50%+40px)] text-lg font-montserrat ${
              global.slide === slideIndex &&
              "animate-fadeInLeft animation-delay-2000"
            }`}
          >
            {data.teksTahun}
          </div>
        </div>

        <div
          className={`relative top-[20px] ${style.judul} ${
            global.slide === slideIndex &&
            "animate-fadeInDown animation-delay-3000"
          }`}
        >
          Akad Nikah
        </div>
        <div
          className={`relative top-[20px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-3500"
          }`}
        >
          Pukul : {data.teksJamAkad}
        </div>
        <div
          className={`relative top-[20px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-3500"
          }`}
        >
          Tempat : {data.lokasiAkad}
        </div>

        <div
          className={`relative top-[50px] ${style.judul} ${
            global.slide === slideIndex &&
            "animate-fadeInDown animation-delay-4000"
          }`}
        >
          Resepsi
        </div>
        <div
          className={`relative top-[50px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-4500"
          }`}
        >
          Pukul : {data.teksJamResepsi}
        </div>
        <div
          className={`relative top-[50px] ${style.paragraf} ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-4500"
          }`}
        >
          Tempat : {data.lokasiResepsi}
        </div>
      </div>
    </div>
  );
}

export default LayoutAcaraDefault;
