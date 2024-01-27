import React from "react";
import FooterStyle from "./footer.module.scss";

//// import IMG:
import Facebook from "../../assets/icon/facebook.svg";
import Vk from "../../assets/icon/vk.svg";
import Instagram from "../../assets/icon/instagram.svg";

export const Footer = () => {
  return (
    <section className={FooterStyle.footer}>
      <div className={FooterStyle.footer_main__all} id="container">
        <h1 className={FooterStyle.footer_title}>Продукция</h1>
        <div className={FooterStyle.footer_list_main}>
          <div className={FooterStyle.footer_list}>
            <a className={FooterStyle.footer_links} href="#">
              Колбасные и мясные изделия
            </a>
            <a className={FooterStyle.footer_links} href="#">
              Молочные продукты
            </a>
          </div>
          <div className={FooterStyle.footer_list}>
            <a className={FooterStyle.footer_links} href="#">
              Морепродукты
            </a>
            <a className={FooterStyle.footer_links} href="#">
              Пиво
            </a>
          </div>
          <div className={FooterStyle.footer_list}>
            <a className={FooterStyle.footer_links} href="#">
              Замороженные продукты
            </a>
            <a className={FooterStyle.footer_links} href="#">
              Мед
            </a>
          </div>
          <div className={FooterStyle.footer_list}>
            <a className={FooterStyle.footer_links} href="#">
              Свежие овощи
            </a>
            <a className={FooterStyle.footer_links} href="#">
              Свежие фрукты
            </a>
          </div>
        </div>
        <div className={FooterStyle.footer_second__links}>
          <a className={FooterStyle.footer_second__links_item} href="#">
            О компании
          </a>
          <a className={FooterStyle.footer_second__links_item} href="#">
            Контакты
          </a>
          <a className={FooterStyle.footer_second__links_item} href="#">
            Наши магазины
          </a>
        </div>
      </div>
      <div className={FooterStyle.footer_info__main} id="container">
        <h2 className={FooterStyle.footer_info}>2016–2021 © ООО «ПД Реснота»</h2>
        <span className={FooterStyle.footer_media}>
          <img src={Facebook} alt="img" />
          <img src={Vk} alt="img" />
          <img src={Instagram} alt="img" />
        </span>
        <p className={FooterStyle.footer_info__site}>Разработка и продвижение сайта — SEOabsolut</p>
      </div>
    </section>
  );
};
