import React from "react";
import Card from "./card";
import background from "assets/img/pope-francis.png";
import backgroundBigger from "assets/img/pope-francis.@2x.png";
import "./styles.scss";

export const Hero = () => {
  return (
    <header class="hero">
      <img
        class="hero__background"
        srcset={`${background} 750w, ${backgroundBigger} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        src={background}
        alt="Pope Francis"
      />
      <div class="max-centered">
        <div class="hero__featured-card">
          <Card />
        </div>
      </div>
      <div class="hero__closing-gauge">
        <div class="closing-gauge__left">
          <span class="closing-gauge__title">closing in</span>
        </div>
        <div class="closing-gauge__right">
          <span class="closing-gauge__number">22</span>
          <span class="closing-gauge__desc">days</span>
        </div>
      </div>
    </header>
  );
};
