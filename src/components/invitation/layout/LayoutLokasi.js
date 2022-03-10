import React from "react";
import { useSelector } from "react-redux";
import { AnimationSnowClean } from "../../../components";

export default function LayoutLokasi({ data, slideIndex }) {
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);

  return (
    <div
      className={`slide-lokasi absolute top-0 bottom-0 right-0 left-0 px-10 ${
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
          Lokasi
        </div>
        <div
          className={`relative top-[20px] mx-auto h-[230px] w-[230px] sm:h-[400px] sm:w-[400px] z-[100] ${
            global.slide === slideIndex && "animate-zoomIn animation-delay-1500"
          }`}
        >
          <iframe
            className='rounded-xl shadow-lg '
            width={window.screen.width < 640 ? "230" : "400"}
            height={window.screen.width < 640 ? "230" : "400"}
            id='gmap_canvas'
            src={data.iFrameGoogleMaps}
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
          ></iframe>
        </div>
        <div
          className={`relative top-[70px] ${style.paragraf}
              ${
                global.slide === slideIndex &&
                "animate-fadeInUp animation-delay-2000"
              }  `}
        >
          {data.lokasiAkad}
        </div>
        <div
          className={`relative text-center top-[100px] z-[100] ${
            global.slide === slideIndex &&
            "animate-fadeInUp animation-delay-2500"
          }`}
        >
          <div className={`w-[200px] mx-auto ${style.button} `}>
            <a className={` `} href={data.linkGoogleMaps} target={"_blank"}>
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
