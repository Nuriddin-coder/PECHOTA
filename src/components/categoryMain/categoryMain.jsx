import React from "react";
import CtgMain from "./ctgMain.module.scss";

export const CategoryMain = () => {
  return (
    <section id="container">
      <div className={CtgMain.category_main__mb}>
        <div className={CtgMain.categorys__mb_item__first}>
          <h2 className={CtgMain.categorys__mb_title}>
            Колбасные и мясные изделия
          </h2>
        </div>
        <div className={CtgMain.categorys__mb_item__second}>
          <h2 className={CtgMain.categorys__mb_title}>Молочные продукты</h2>
        </div>
        <div className={CtgMain.categorys__mb_item__third}>
          <h2 className={CtgMain.categorys__mb_title}>Морепродукты</h2>
        </div>
        <div className={CtgMain.categorys__mb_item__fourth}>
          <h2 className={CtgMain.categorys__mb_title}>Пиво</h2>
        </div>
        <div className={CtgMain.categorys__mb_item__fiveth}>
          <h2 className={CtgMain.categorys__mb_title}>Замороженные продукты</h2>
        </div>
        <div className={CtgMain.categorys__mb_item__sixth}>
          <h2 className={CtgMain.categorys__mb_title}>Мёд</h2>
        </div>
        <div className={CtgMain.categorys__mb_item__seventh}>
          <h2 className={CtgMain.categorys__mb_title}>Свежие овощи</h2>
        </div>
        <div className={CtgMain.categorys__mb_item__eighthth}>
          <h2 className={CtgMain.categorys__mb_title}>Свежие фрукты</h2>
        </div>
      </div>

      <div className={CtgMain.category_main__tb}>
        <div className={CtgMain.category_main__tb_first}>
          <div className={CtgMain.categorys__tb_item__first}>
            <h2 className={CtgMain.categorys__tb_title}>
              Колбасные и мясные изделия
            </h2>
            <p className={CtgMain.categorys__tb_text}>56 товаров</p>
          </div>
          <div className={CtgMain.categorys__tb_item__second}>
            <h2 className={CtgMain.categorys__tb_title}>Молочные продукты</h2>
            <p className={CtgMain.categorys__tb_text}>
              Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко, Сметана,
              Творог, Творожная масса
            </p>
          </div>
        </div>

        <div className={CtgMain.categorys__tb_item__third}>
          <h2 className={CtgMain.categorys__tb_title}>Морепродукты</h2>
          <p className={CtgMain.categorys__tb_text}>Рыба, Икра, Креветки</p>
        </div>

        <div className={CtgMain.category_main__tb_second}>
          <div className={CtgMain.categorys__tb_item__fourth}>
            <h2 className={CtgMain.categorys__tb_title}>Пиво</h2>
            <p className={CtgMain.categorys__tb_text}>Крафтовое пиво</p>
          </div>
          <div className={CtgMain.categorys__tb_item__fiveth}>
            <h2 className={CtgMain.categorys__tb_title}>
              Замороженные продукты
            </h2>
            <p className={CtgMain.categorys__tb_text}>
              Замороженные овощи, Замороженные фркуты
            </p>
          </div>
        </div>

        <div className={CtgMain.category_main__tb_third}>
          <div className={CtgMain.categorys__tb_item__sixth}>
            <h2 className={CtgMain.categorys__tb_title}>Мёд</h2>
            <p className={CtgMain.categorys__tb_text}>
              Мед горный 0,25 кг, Мед с облепихой 0,25 кг, Мед с черникой 0,25
              кг, Мед с разнотравья 0,25 кг, Мед цветочный 0,25 кг
            </p>
          </div>
          <div className={CtgMain.categorys__tb_item__seventh}>
            <h2 className={CtgMain.categorys__tb_title}>Свежие овощи</h2>
            <p className={CtgMain.categorys__tb_text}>
              Картофель, Огурцы, Помидоры
            </p>
          </div>
        </div>
        <div className={CtgMain.categorys__tb_item__eighthth}>
          <h2 className={CtgMain.categorys__tb_title}>Свежие фрукты</h2>
          <p className={CtgMain.categorys__tb_text}>Сезонные яблоки</p>
        </div>
      </div>

      <div className={CtgMain.category_main__desk}>
        <div className={CtgMain.category_main__tb_first}>
          <div className={CtgMain.categorys__tb_item__first}>
            <h2 className={CtgMain.categorys__tb_title}>
              Колбасные и мясные изделия
            </h2>
            <p className={CtgMain.categorys__tb_text}>56 товаров</p>
          </div>
          <div className={CtgMain.categorys__tb_item__second}>
            <h2 className={CtgMain.categorys__tb_title}>Молочные продукты</h2>
            <p className={CtgMain.categorys__tb_text}>
              Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко, Сметана,
              Творог, Творожная масса
            </p>
          </div>
          
          <div className={CtgMain.categorys__tb_item__third}>
            <h2 className={CtgMain.categorys__tb_title}>Морепродукты</h2>
            <p className={CtgMain.categorys__tb_text}>Рыба, Икра, Креветки</p>
          </div>
        </div>

        <div className={CtgMain.category_main__tb_second}>
          <div className={CtgMain.categorys__tb_item__fourth}>
            <h2 className={CtgMain.categorys__tb_title}>Пиво</h2>
            <p className={CtgMain.categorys__tb_text}>Крафтовое пиво</p>
          </div>
          <div className={CtgMain.categorys__tb_item__fiveth}>
            <h2 className={CtgMain.categorys__tb_title}>
              Замороженные продукты
            </h2>
            <p className={CtgMain.categorys__tb_text}>
              Замороженные овощи, Замороженные фркуты
            </p>
          </div>
        </div>

        <div className={CtgMain.category_main__tb_third}>
          <div className={CtgMain.categorys__tb_item__sixth}>
            <h2 className={CtgMain.categorys__tb_title}>Мёд</h2>
            <p className={CtgMain.categorys__tb_text}>
              Мед горный 0,25 кг, Мед с облепихой 0,25 кг, Мед с черникой 0,25
              кг, Мед с разнотравья 0,25 кг, Мед цветочный 0,25 кг
            </p>
          </div>
          <div className={CtgMain.categorys__tb_item__seventh}>
            <h2 className={CtgMain.categorys__tb_title}>Свежие овощи</h2>
            <p className={CtgMain.categorys__tb_text}>
              Картофель, Огурцы, Помидоры
            </p>
          </div>

          <div className={CtgMain.categorys__desk_item__eighthth}>
            <h2 className={CtgMain.categorys__tb_title}>Свежие фрукты</h2>
            <p className={CtgMain.categorys__tb_text}>Сезонные яблоки</p>
          </div>
        </div>
      </div>
    </section>
  );
};
