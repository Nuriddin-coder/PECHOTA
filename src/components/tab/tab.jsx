import React from "react";
import { Card } from "../cards";
import TabStyle from "./tab.module.scss";
import { Btn } from "../btns";

//// img:
import CardImg1 from "../../assets/img/card-img1.png";
import CardImg2 from "../../assets/img/card-img2.png";
import CardImg3 from "../../assets/img/card-img3.png";

export const Tab = () => {
  return (
    <>
      <div className={TabStyle.tab_btns}>
        <Btn>Хиты</Btn>
        <Btn>Скидки</Btn>
        <Btn>Новинки</Btn>
      </div>
      <section className={TabStyle.tab_main}>
        <div className={TabStyle.cards_all__main} id="container">
          <Card img={CardImg3} />
          <Card img={CardImg2} />
          <Card img={CardImg3} />
          <Card img={CardImg2} />
        </div>
      </section>
    </>
  );
};
