import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVarianMaroon } from "../features/styleSnowClean";

//Import Components
import {
  LayoutModalCover,
  LayoutThumbnails,
  LayoutMempelai,
  LayoutAcara,
  LayoutLokasi,
  LayoutProtokol,
  LayoutPenutup,
  LayoutCoverSnowClean,
  AnimationSnowClean,
} from "../components";

export default function ThemeSnowClean({ data }) {
  const dispatch = useDispatch();
  const style = useSelector((state) => state.styleSnowClean.value);

  return (
    <>
      <div className='relative'>
        <LayoutModalCover data={data} />
        <LayoutThumbnails />
        <AnimationSnowClean slideIndex={1} />
        <AnimationSnowClean slideIndex={2} />
        <AnimationSnowClean slideIndex={3} />
        <AnimationSnowClean slideIndex={4} />
        <AnimationSnowClean slideIndex={5} />
        <AnimationSnowClean slideIndex={6} />

        <div
          className={`relative h-screen w-full sm:w-[640px] mx-auto ${style.primaryBgColor} overflow-hidden shadow-xl`}
        >
          <LayoutCoverSnowClean data={data} slideIndex={1} />
          <LayoutMempelai data={data} slideIndex={2} />
          <LayoutAcara data={data} slideIndex={3} />
          <LayoutLokasi data={data} slideIndex={4} />
          <LayoutProtokol slideIndex={5} />
          <LayoutPenutup data={data} slideIndex={6} />
        </div>
      </div>
    </>
  );
}
