import React, { useState } from "react";
import Card from "./cardCarousel";
import { initalState } from "./data";
import C1 from "../../common/assets/images/carousel1.jpg";
import C2 from "../../common/assets/images/carousel2.jpg";
import C3 from "../../common/assets/images/carousel3.jpg";
import C4 from "../../common/assets/images/carousel4.jpg";

function Carousel() {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <div className="flex flex-row justify-center">
      <button
        className="text-3xl md:text-6xl cursor-pointer justify-self-center animate-pulse"
        onClick={() => handleLeftClick()}
      >
        {"<"}
      </button>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card
            className="flex flex-row justify-end"
            key={index}
            prop={card.text}
            img={card.img}
          />
        ))}
      <button
        className="text-3xl md:text-6xl cursor-pointer justify-center content-center items-center animate-pulse"
        onClick={() => handleRightClick()}
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
