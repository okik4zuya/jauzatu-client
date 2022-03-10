import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "../../../features/global";

function LayoutModalCover() {
  const dispatch = useDispatch();
  const style = useSelector((state) => state.styleSnowClean.value);
  const global = useSelector((state) => state.global.value);
  const [showCoverModal, setShowCoverModal] = useState(true);

  const handleCloseCoverModal = () => {
    setShowCoverModal(false);
    dispatch(setPlaying(true));
  };

  return (
    <div
      className={`${
        !showCoverModal && "hidden"
      } absolute w-full h-screen z-[100] bg-black/70`}
    >
      <div className='text-center text-white mt-[250px] '>
        <div className={`${style.fontArt} text-[30px] sm:text-[60px] mb-4`}>
          Omar & Hana
        </div>
        <div className={`sm:text-xl`}>Kepada Yth</div>
        <div className='paragraf sm:text-xl'>Bapak/Ibu/Saudara/I</div>
        <div className='font-bold text-lg sm:text-2xl'>{global.invited}</div>
        <div className={` mt-6 relative text-center `}>
          <button
            className={`${style.button} `}
            onClick={handleCloseCoverModal}
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutModalCover;
