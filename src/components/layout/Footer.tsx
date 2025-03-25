import logo from "../../assets/images/icons/logoAgreeWB.svg";
import tg from "../../assets/images/icons/telegram.svg";
import email from "../../assets/images/icons/Email.svg";
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

            <div className="footer__section">
              <h3>Контакты</h3>
              <div className="footer__contacts">
                <div className="item">
                  <img src={email} alt="" />
                  <p>contact@wbdiscount.pro</p>
                </div>
                <div className="item">
                  <img src={email} alt="" />
                  <p>contact@wbdiscount.pro</p>
                </div>
                <div className="item">
                  <img src={email} alt="" />
                  <p>contact@wbdiscount.pro</p>
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
