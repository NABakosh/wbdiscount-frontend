import banner from ".././assets/images/common/bannerHome.svg";
import card from "../assets/images/common/cardSvg.svg";
import Card from "../components/layout/Card";
import "../styles/components/Home.scss";
import "../styles/ui/DropDown.scss";
import {
  SmoothDropdown,
  DropDownPrice,
  CashDrop,
} from "../components/ui/index";

type Props = {};

const Home = ({}: Props) => {
  const items = [
    {
      id: 0,
      img: card,
      name: "Футболка оверсайз с абстрактным принтом",
      price: 1499,
      beforePrice: 2990,
    },
    {
      id: 1,
      img: card,
      name: "Худи с геометрическим принтом",
      price: 3499,
      beforePrice: 4990,
    },
    {
      id: 2,
      img: card,
      name: "Рубашка с тропическим принтом",
      price: 2299,
      beforePrice: 3990,
    },
    {
      id: 3,
      img: card,
      name: "Свитшот с графическим принтом",
      price: 2799,
      beforePrice: 4290,
    },
    {
      id: 4,
      img: card,
      name: "Джинсы с художественным принтом",
      price: 3999,
      beforePrice: 5990,
    },
    {
      id: 5,
      img: card,
      name: "Косуха с принтом «Винтаж»",
      price: 5999,
      beforePrice: 8990,
    },
  ];
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
          <SmoothDropdown />
          <DropDownPrice />
          <CashDrop />
        </div>
      </div>
      <div className="Home-container__groups-card">
        {items.map((obj, index) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};
export default Home;
