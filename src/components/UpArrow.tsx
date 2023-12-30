"use client";
import { SlArrowUp } from "react-icons/sl";

const UpArrow = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-auto flex items-center justify-center">
      <button
        type="button"
        className="rounded-full bg-white p-3"
        onClick={handleScrollToTop}
      >
        <SlArrowUp className="h-5 w-5 text-primaryColor" />
      </button>
    </div>
  );
};

export default UpArrow;
