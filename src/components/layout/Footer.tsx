import logo from "../../assets/images/icons/logoAgreeWB.svg";
import tg from "../../assets/images/icons/telegram.svg";
import email from "../../assets/images/icons/Email.svg";
import call from "../../assets/images/icons/call.svg";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="footer ">
      <div className="footer-content wrapper">
        <div className="info">
          <div className="footer__header">
            <div className="logo">
              <img src={logo} alt="" />
              <span>WBdiscount</span>
            </div>

            <p>
              ИП Клягин Владимир Александрович <br />
              ИНН 632100726934
            </p>
            <div className="footer__icons">
              <div className="footer__icon">
                <img src={tg} alt="tgicon" />
              </div>
              <div className="footer__icon">
                <img src={tg} alt="tgicon" />
              </div>
              <div className="footer__icon">
                <img src={tg} alt="tgicon" />
              </div>
            </div>
          </div>
          <div className="footer__sections">
            <div className="for-mobile">
              <div className="footer__section">
                <h3>Покупателям</h3>
                <div className="footer__links">
                  <div className="footer__link-column">
                    <a href="/">Главная</a>
                    <a href="/categories">Категории</a>
                  </div>
                </div>
              </div>
              <div className="footer__section">
                <h3>Продавцам</h3>
                <div className="footer__links">
                  <a href="/seller/login">Вход</a>
                  <a href="/seller/support">Поддержка</a>
                </div>
              </div>
            </div>

            <div className="footer__section">
              <h3>Контакты</h3>
              <div className="footer__contacts">
                <div className="item">
                  <img src={email} alt="" />
                  <p>contact@wbdiscount.pro</p>
                </div>
                <div className="item">
                  <img src={call} alt="" />
                  <p>+7 (977) 689 34 34</p>
                </div>
                <div className="item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8612 9.65592C16.8612 15.0348 11.352 18.3485 10.2071 18.9797C10.1437 19.0147 10.0724 19.033 9.99998 19.033C9.92755 19.033 9.8563 19.0147 9.79287 18.9797C8.64712 18.3485 3.13965 15.0348 3.13965 9.65592C3.13965 5.36795 5.71243 2.36636 10.0004 2.36636C14.2884 2.36636 16.8612 5.36795 16.8612 9.65592Z"
                      stroke="#170F49"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.57031 9.22713C6.57031 10.1369 6.93173 11.0095 7.57505 11.6528C8.21837 12.2961 9.0909 12.6575 10.0007 12.6575C10.9105 12.6575 11.783 12.2961 12.4263 11.6528C13.0697 11.0095 13.4311 10.1369 13.4311 9.22713C13.4311 8.31734 13.0697 7.44481 12.4263 6.80149C11.783 6.15817 10.9105 5.79675 10.0007 5.79675C9.0909 5.79675 8.21837 6.15817 7.57505 6.80149C6.93173 7.44481 6.57031 8.31734 6.57031 9.22713V9.22713Z"
                      stroke="#170F49"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Москва, ул.Мясникова</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>WBDiscount.pro | Все права защищены © 2024</p>
          <div className="footer__legal">
            <a href="/terms">Пользовательское соглашение</a>
            <span> | </span>
            <a href="/privacy">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
