import banner from ".././assets/images/common/bannerHome.svg";
import card from ".././assets/images/common/prototypeCard.svg";
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
        {Array.from({ length: 8 }).map((_, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Home;
