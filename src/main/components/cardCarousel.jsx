import React, { useState } from "react";

function CardCarousel({ prop, img }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
        flex
        justify-center
        text-xs md:text-3xl 
        p-4 w-50 h-50 bg-slate-300 md:p-5 md:w-60 md:h-60 md:bg-emerald-300
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <div onClick={handleClick} className="flex">
        <img
          src={img}
          alt="puppy"
          className="object-cover object-center w-60 rounded-2xl"
        />
        <div className={editable ? "opacity-0" : "opacity-800"}>{prop}</div>

        <input
          className="text-sm w-15 bg-slate-100 flex justify-end"
          type={!editable && "hidden"}
          value={prop}
        />
      </div>
    </div>
  );
}

export default CardCarousel;
