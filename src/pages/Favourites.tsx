import card from "../assets/images/common/prototypeCard.svg";
import Card from "../components/layout/Card";
import "../styles/components/Favourite.scss";
type Props = {};
function Favourites({}: Props) {
  return (
    <div className="favourites wrapper">
      <div className="favourites-container">
        <div className="favourites__title">
          <strong className="title">Избранное</strong>
          <p className="description">5 товаров</p>
        </div>
        <div className="favourites__groups-card">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
