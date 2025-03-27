import { useState } from "react";
import banner from ".././assets/images/common/bannerHome.svg";
import card from ".././assets/images/common/prototypeCard.svg";
import dropIcon from ".././assets/images/icons/dropDown.svg";
import Card from "../components/layout/Card";
import InputDropDown from "../components/ui/InputDropDown";
import "../styles/components/Home.scss";
import { DropDown } from "../components/ui/DropDown";

type Props = {};

const Home = ({}: Props) => {
  const [activeDropdown, setActiveDropdown] = useState<null | string>(null);
  const itemsInput = [
    { name: "Цена ₽", img: dropIcon, id: "0" },
    { name: "Кэшбэк %", img: dropIcon, id: "1" },
    { name: "Сортировка", img: dropIcon, id: "2" },
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
          {itemsInput.map((obj) => (
            <div>
              <InputDropDown
                dropIcon={obj.img}
                key={obj.id}
                name={obj.name}
                id={obj.id}
                setActiveDropdown={(i) => setActiveDropdown(i)}
              ></InputDropDown>
              <DropDown
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                id={obj.id}
              />
            </div>
          ))}
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
