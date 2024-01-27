import React from "react";
import CardStyle from "./card.module.scss";
import { Btn } from "../btns";

//// import IMG:


export const Card = ({ img }) => {
  return (
    <div className={CardStyle.card_main__item}>
      <img className={CardStyle.card_img} src={img} alt="img" />
      <div className={CardStyle.card_main__des}>
        <h2 className={CardStyle.card_main__title}>Говядина, кусок с/к</h2>
        <p className={CardStyle.card_main__text}>
          Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные
          специи, сахар.
        </p>
        <strong className={CardStyle.card_sale__price}>500 ₽</strong>
        <div className={CardStyle.card_price}>
          <p className={CardStyle.card_old__price}>660 ₽</p>
          <span className={CardStyle.card_sale__nums}>
            <p className={CardStyle.sale_num}>-15%</p>
            <p className={CardStyle.sale_text}>Экономия 160 ₽</p>
          </span>
        </div>
        <div className={CardStyle.card_main__btns}>
          <Btn color="#fff" bgclr="#0E2149">
            Купить
          </Btn>
          <Btn color="#fff" bgclr="#CFB08B">
            В 1 клик
          </Btn>
        </div>
      </div>
    </div>
  );
};
