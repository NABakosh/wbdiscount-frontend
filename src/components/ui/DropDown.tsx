
import RoundCheckbox from "./RoundCheckbox";

type DropDownProps = {};

export const DropDown = ({}: DropDownProps) => {
  const itemsCheckBoxDrop = [
    { name: "По дате публикации", id: "0" },
    { name: "Цена по убыванию", id: "1" },
    { name: "По рейтингу товара", id: "2" },
    { name: "По рейтингу продавца", id: "3" },
    { name: "По размеру кэшбека", id: "4" },
  ];

  return (
    <div className="drop">
      {itemsCheckBoxDrop.map((obj) => (
        <div className="drop-name">
          <p>{obj.name}</p>
          <RoundCheckbox />
        </div>
      ))}
    </div>
  );
};
