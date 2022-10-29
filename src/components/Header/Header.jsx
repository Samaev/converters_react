import React from "react";
import "./header.css";
import facebook from "../../images/icons/facebook.svg";
import instagram from "../../images/icons/instagram.svg";
import youtube from "../../images/icons/youtube.svg";
import phone from "../../images/icons/phone.svg";

export default function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="wrapper-feedback">
          <div className="header__feedback">
            <img classname="header__icon" src={phone} alt="Icon, phone" />
            <div classname="feedback__container">
              Будь ласка, звертайтесь за нашими адресами електронної пошти
            </div>

          </div>
          <div className="header__faq">FAQ - Часті питання</div>
          <div className="header__social-mobile">
            <img classname="header__icon" src={phone} alt="Icon, phone" />
              <img
                classname="header__icon"
                src={facebook}
                alt="Icon, Facebook"
              />
              <img
                classname="header__icon"
                src={instagram}
                alt="Icon, instagram"
              />
              <img classname="header__icon" src={youtube} alt="Icon, youtube" />
            </div>
        </div>
        <div className="wrapper-menu">
          <ul className="nav__menu">
            <li className="nav__item">Обслуговування</li>
            <li className="nav__item">Новини</li>
            <li className="nav__item">Про нас</li>
            <li className="nav__item">Контакти</li>
            <li className="nav__item">Напишіть нам</li>
          </ul>
          <div className="header__social">
            <img classname="header__icon" src={facebook} alt="Icon, Facebook" />
            <img
              classname="header__icon"
              src={instagram}
              alt="Icon, instagram"
            />
            <img classname="header__icon" src={youtube} alt="Icon, youtube" />
          </div>
        </div>
      </nav>
    </div>
  );
}
