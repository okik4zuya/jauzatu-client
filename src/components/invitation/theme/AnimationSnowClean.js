import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AnimationSnowClean({ slideIndex }) {
  const dispatch = useDispatch();
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);
  return (
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 z-10 w-screen sm:w-[640px]  h-screen mx-auto overflow-hidden ${
        global.slide !== slideIndex && "animate-fadeOut"
      } `}
    >
      <div
        className={`kiri absolute w-[2px] top-[20px] left-[20px] bottom-[100px] ${
          style.secondaryBgColor
        }  ${
          global.slide === slideIndex &&
          "animate-fadeInDown animation-delay-1000"
        }`}
      ></div>
      <div
        className={`atas absolute h-[2px] top-[20px] left-[20px] right-[20px] ${
          style.secondaryBgColor
        }  ${
          global.slide === slideIndex &&
          "animate-fadeInLeft animation-delay-1000"
        }`}
      ></div>
      <div
        className={`kanan ${
          style.secondaryBgColor
        } absolute w-[2px] top-[20px] right-[20px] bottom-[100px]   ${
          global.slide === slideIndex && "animate-fadeInUp animation-delay-1000"
        }`}
      ></div>
      <div
        className={`bawah absolute h-[2px] bottom-[100px] left-[20px] right-[20px] ${
          style.secondaryBgColor
        }  ${
          global.slide === slideIndex &&
          "animate-fadeInRight animation-delay-1000"
        }`}
      ></div>
    </div>
  );
}
