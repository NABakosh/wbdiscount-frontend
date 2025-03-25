import banner from ".././assets/images/common/bannerHome.svg";
import "../styles/components/Home.scss";
import dropIcon from ".././assets/images/icons/dropDown.svg";
import card from ".././assets/images/common/prototypeCard.svg";

type Props = {};

const Home = ({}: Props) => {
  const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="Home-container wrapper">
      <div className="Banner">
        <img src={banner} alt="" className="banner-img" />
      </div>
      <div className="Home-container__title">
        <div className="info">
          <h1>Товары с кэшбеком:</h1>
          <p>748 товаров</p>
        </div>
        <div className="group-dropdown">
          <div className="dropdown dropdown-price">
            <span>Цена, ₽</span>
            <img src={dropIcon} alt="" />
          </div>
          <div className="dropdown dropdown-price">
            <span>Цена, ₽</span>
            <img src={dropIcon} alt="" />
          </div>
          <div className="dropdown dropdown-price">
            <span>Цена, ₽</span>
            <img src={dropIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="Home-container__groups-card">
        {cards.map((obj) => (
          <div className="card">
            <div className="topCard">
              <img src={card} alt="card" />
            </div>
            <div className="info">
              <div className="price">
                <strong>900 ₽</strong>
                <p>1800</p>
              </div>
            </div>
            <span>Рюкзак школьный городск..</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
