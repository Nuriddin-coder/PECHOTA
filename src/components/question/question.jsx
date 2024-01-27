import React from "react";
import QuestionStyle from "./question.module.scss";
import { CheckboxExample } from "../checkbox";
import { Btn } from "../btns";
import LogoBig from "../../assets/icon/logo-big.svg";

export const Question = () => {
  return (
    <section className={QuestionStyle.question}>
      <div id="container">
        <div className={QuestionStyle.quesn_main__des}>
          <div className={QuestionStyle.quesn_des}>
            <div>
              <h1 className={QuestionStyle.quesn_main__title}>Есть вопросы?</h1>
              <p className={QuestionStyle.quesn_main__text}>
                Оставьте свои данные и наш менеджер свяжется с вами в ближайшее
                время.
              </p>
            </div>
            <img src={LogoBig} alt="logo" />
          </div>
          <div className={QuestionStyle.quesn_main__input}>
            <div className={QuestionStyle.quesn_main__input_item}>
              <div className={QuestionStyle.quesn_input}>
                <input
                  className={QuestionStyle.quesn_input__item}
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className={QuestionStyle.quesn_input__item}
                  type="email"
                  placeholder="Телефон/E-mail"
                />
              </div>
              <input
                className={QuestionStyle.quesn_input__item_comment}
                type="text"
                placeholder="Комментарий"
              />
            </div>

            <div className={QuestionStyle.quest_check__main}>
              <CheckboxExample text="Даю согласие на рассылку рекламных материалов, акций и скидок" />
              <CheckboxExample text="Даю согласие на обработку моих персональных данных" />
            </div>
            <div className={QuestionStyle.quesn_btn__main}>
              <Btn color="#fff" bgclr="#D79F43">
                Отправить
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
