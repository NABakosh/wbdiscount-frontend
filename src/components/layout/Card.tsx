import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFavourite,
  deleteFavourite,
} from "../../store/slices/FavouritesSlice";

type CardProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  beforePrice: number;
  isLoved: boolean;
};

const Card = ({ id, img, name, price, beforePrice, isLoved }: CardProps) => {
  const location = useLocation();
  const [love, setLove] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="topCard">
        <img src={img} alt="card" className="cardImg" />
        {isLoved ? (
          <svg
            onClick={() => {
              dispatch(deleteFavourite(id));
            }}
            className="loveCard"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill={"#ac5dfb"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1494 3.12177C22.5629 2.44911 21.8667 1.9155 21.1003 1.55144C20.334 1.18738 19.5126 1 18.6831 1C17.8535 1 17.0321 1.18738 16.2658 1.55144C15.4994 1.9155 14.8032 2.44911 14.2167 3.12177L12.9997 4.51714L11.7826 3.12177C10.5981 1.76368 8.99152 1.0007 7.31633 1.0007C5.64114 1.0007 4.03455 1.76368 2.85001 3.12177C1.66547 4.47987 1 6.32185 1 8.24249C1 10.1631 1.66547 12.0051 2.85001 13.3632L4.06705 14.7586L12.9997 25L21.9323 14.7586L23.1494 13.3632C23.7361 12.6909 24.2015 11.8926 24.519 11.0139C24.8366 10.1353 25 9.19356 25 8.24249C25 7.29142 24.8366 6.34967 24.519 5.47104C24.2015 4.59241 23.7361 3.79412 23.1494 3.12177Z"
              stroke={"#8000ff"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            onClick={() => {
              setLove(!love);
              const item = {
                id,
                img,
                name,
                price,
                beforePrice,
              };
              dispatch(addFavourite(item));
            }}
            className="loveCard"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill={love ? "#ac5dfb" : ""}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1494 3.12177C22.5629 2.44911 21.8667 1.9155 21.1003 1.55144C20.334 1.18738 19.5126 1 18.6831 1C17.8535 1 17.0321 1.18738 16.2658 1.55144C15.4994 1.9155 14.8032 2.44911 14.2167 3.12177L12.9997 4.51714L11.7826 3.12177C10.5981 1.76368 8.99152 1.0007 7.31633 1.0007C5.64114 1.0007 4.03455 1.76368 2.85001 3.12177C1.66547 4.47987 1 6.32185 1 8.24249C1 10.1631 1.66547 12.0051 2.85001 13.3632L4.06705 14.7586L12.9997 25L21.9323 14.7586L23.1494 13.3632C23.7361 12.6909 24.2015 11.8926 24.519 11.0139C24.8366 10.1353 25 9.19356 25 8.24249C25 7.29142 24.8366 6.34967 24.519 5.47104C24.2015 4.59241 23.7361 3.79412 23.1494 3.12177Z"
              stroke={love ? "#8000ff" : "#E3E3E3"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}

        <span className="discount">-50%</span>
      </div>
      <div className="info">
        <div className="price">
          <strong>{price} ₽</strong>
          <p>{beforePrice} ₽</p>
        </div>
      </div>
      <span>{name}</span>
      {location.pathname === "/favourites" ? (
        <span>Осталось: 11 штук</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
