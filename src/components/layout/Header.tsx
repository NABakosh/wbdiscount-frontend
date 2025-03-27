import { Link } from "react-router-dom";
import logo from "../../assets/images/common/LogoWDB.svg";
import searchIcon from "../../assets/images/icons/searchHeader.svg";
import homeIcon from "../../assets/images/common/homeHeaderLogo.svg";
import cubeIcon from "../../assets/images/common/HeaderCube.svg";
import carIcon from "../../assets/images/common/carHeader.svg";
import loveIcon from "../../assets/images/icons/loveHeader.svg";
import userIcon from "../../assets/images/icons/user.svg";
import "../../styles/Layout/header.scss";
import { useState } from "react";
function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header ">
      <div className="header__container wrapper">
        <div className="header__logo">
          <img src={logo} alt="Логотип WDB" className="header__logo-image" />
        </div>
        <button
          className={`burger-button ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="header__search">
          <img src={searchIcon} alt="Поиск" className="header__search-icon" />
          <input
            type="text"
            placeholder="Поиск"
            className="header__search-input"
          />
        </div>
        {/* Навигация */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="#" className="header__nav-link">
                <img
                  src={homeIcon}
                  alt="Главная"
                  className="header__nav-icon"
                />
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="#" className="header__nav-link">
                <img
                  src={cubeIcon}
                  alt="Каталог"
                  className="header__nav-icon"
                />
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="#" className="header__nav-link">
                <img src={carIcon} alt="Корзина" className="header__nav-icon" />
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="#" className="header__nav-link">
                <img
                  src={loveIcon}
                  alt="Избранное"
                  className="header__nav-icon"
                />
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="#" className="header__nav-link">
                <img
                  src={userIcon}
                  alt="Профиль"
                  className="header__nav-icon"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
