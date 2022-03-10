import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splidestyle.css";
import {
  FaBook,
  FaRegHeart,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { BiMap } from "react-icons/bi";
import { setSlide } from "../../../features/global";

export default function LayoutThumbnails() {
  const dispatch = useDispatch();
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);

  return (
    <div className='fixed bottom-0 right-0 left-0 mx-auto z-50 drop-shadow-2xl'>
      <Splide
        options={{
          fixedWidth: window.screen.width < 640 ? 100 : 150,
          fixedHeight: window.screen.width < 640 ? 70 : 120,
          rewind: false,
          pagination: false,
          arrows: false,
          gap: -1,
          focus: "center",
          isNavigation: true,
          slideFocus: false,
        }}
        className=''
        id='thumbnail-slider'
      >
        <SplideSlide className=' '>
          <div
            className={`${style.thumb}  ${
              global.slide === 1 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => dispatch(setSlide(1))}
          >
            <div className=''>
              <FaBook
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className={`${style.thumbText}`}>Cover</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`${style.thumb} ${
              global.slide === 2 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => dispatch(setSlide(2))}
          >
            <div className=''>
              <FaRegHeart
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className={`${style.thumbText}`}>Mempelai</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`${style.thumb}  ${
              global.slide === 3 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => dispatch(setSlide(3))}
          >
            <div className=''>
              <FaRegCalendarAlt
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className={`${style.thumbText}`}>Acara</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`${style.thumb} ${
              global.slide === 4 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => dispatch(setSlide(4))}
          >
            <div className=''>
              <FaMapMarkedAlt
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className={`${style.thumbText}`}>Lokasi</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`${style.thumb}  ${
              global.slide === 5 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => dispatch(setSlide(5))}
          >
            <div className=''>
              <BsShieldFillCheck
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className={`${style.thumbText}`}>Protokol</div>
          </div>
        </SplideSlide>
        <SplideSlide className=''>
          <div
            className={`${style.thumb} ${
              global.slide === 6 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => dispatch(setSlide(6))}
          >
            <div className=''>
              <ImExit
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className={`${style.thumbText}`}>Penutup</div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
