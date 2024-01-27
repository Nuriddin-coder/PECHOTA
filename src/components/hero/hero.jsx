import React from "react";
import HeroStyle from "./hero.module.scss";
import { Btn } from "../btns";

export const Hero = () => {
  return (
    <section className={HeroStyle.hero}>
      <div id="container">
        <h2 className={HeroStyle.hero_title}>Истина в качестве</h2>
        <p className={HeroStyle.hero_text}>
          КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
          КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
        </p>
        <Btn color="#fff" bgclr="#0E2149">
          Купить
        </Btn>
        <div className={HeroStyle.hero_dot}>
            <span className={HeroStyle.hero_dot__items_first}></span>
            <span className={HeroStyle.hero_dot__items}></span>
            <span className={HeroStyle.hero_dot__items}></span>
            <span className={HeroStyle.hero_dot__items}></span>
        </div>
      </div>
    </section>
  );
};
