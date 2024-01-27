import React from "react";
import HeaderStyle from "./header.module.scss";
import { Category } from "../category";

/////  imgs and icons:
import Logo from "../../assets/icon/logo.svg";
import Star from "../../assets/icon/star.svg";
import Bag from "../../assets/icon/bag.svg";
import Menu from "../../assets/icon/menu.svg";
import Search from "../../assets/icon/search.svg";

export const Header = () => {
  return (
    <>
      <section className={HeaderStyle.header_main} id="container">
        <div className={HeaderStyle.header_logo}>
          <img className={HeaderStyle.logo} src={Logo} alt="logo" />
          <p className={HeaderStyle.logo_text}>Колбасы и мясные деликатесы</p>
        </div>
        <div className={HeaderStyle.header_info}>
          <a href="#">
            <img
              className={HeaderStyle.header_star__icon}
              src={Star}
              alt="star"
            />
          </a>
          <a href="#">
            <img className={HeaderStyle.header_bag__icon} src={Bag} alt="bag" />
          </a>
          <div className={HeaderStyle.header_product__main}>
            <span className={HeaderStyle.header_product}>
              <p className={HeaderStyle.header_product__text}>Товаров:</p>
              <p className={HeaderStyle.header_product__num}>3</p>
            </span>
            <strong className={HeaderStyle.header_product__price}>
              6 540 ₽
            </strong>
          </div>
        </div>
      </section>

      <section className={HeaderStyle.category}>
        <div id="container">
          <div className={HeaderStyle.category_mb__main}>
            <a href="#">
              <img
                className={HeaderStyle.category_menu__icon}
                src={Menu}
                alt="icons"
              />
            </a>
            <input className={HeaderStyle.heder_mb__input} type="text" />
            <a href="#">
              <img
                className={HeaderStyle.category_search__icon}
                src={Search}
                alt="icons"
              />
            </a>
          </div>

          <div className={HeaderStyle.category_tab}>
            <Category />
            <div className={HeaderStyle.category_input}>
              <input
                className={HeaderStyle.category_input__item}
                type="text"
                placeholder="Поиск по сайту"
              />
              <a href="#">
                <img
                  className={HeaderStyle.category_input__search}
                  src={Search}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
