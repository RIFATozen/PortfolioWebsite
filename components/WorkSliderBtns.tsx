"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
}

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button aria-label="Come back to the previous project" className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button aria-label="Move on to the next project" className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};
export default WorkSliderBtns;
