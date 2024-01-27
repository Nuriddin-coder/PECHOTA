import React from "react";
import CategoryStyle from "./category.module.scss";

export const Category = () => {
  return (
    <div className={CategoryStyle.category__list}>
      <a className={CategoryStyle.category_links} href="#">
        О ресноте
      </a>
      <a className={CategoryStyle.category_links} href="#">
        Каталог{" "}
      </a>
      <a className={CategoryStyle.category_links} href="#">
        Наши магазины{" "}
      </a>
      <a className={CategoryStyle.category_links} href="#">
        Контакты
      </a>
    </div>
  );
};
