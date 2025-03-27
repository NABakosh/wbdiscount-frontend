import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  card: string;
};

const Card = ({ card }: Props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
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
      {location.pathname === "/favorites" ? <span>Осталось: 11 штук</span> : ""}
    </div>
  );
};

export default Card;
