import { useSelector } from "react-redux";
import "../styles/components/Favourite.scss";
import { RootState } from "../store/index";
import Card from "../components/layout/Card";
function Favourites() {
  const items = useSelector((state: RootState) => state.favourites.items);
  return (
    <div className="favourites wrapper">
      <div className="favourites-container">
        <div className="favourites__title">
          <strong className="title">Избранное</strong>
          <p className="description">{items.length} товаров</p>
        </div>
        <div className="favourites__groups-card">
          {items.map((obj) => (
            <Card key={obj.id} {...obj} isLoved={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
