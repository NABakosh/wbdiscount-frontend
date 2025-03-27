// src/components/ui/InputDropDown.tsx
import { useState } from "react";
import styles from "../../styles/ui/DropDown.module.scss";
import RoundCheckbox from "./RoundCheckbox";

type DropDownProps = {
  id: string;
  activeDropdown: string | null;
  setActiveDropdown: (i: string | null) => void;
};

export const DropDown = ({ activeDropdown, id }: DropDownProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const itemsCheckBoxDrop = [
    { name: "По дате публикации", id: "0" },
    { name: "Цена по убыванию", id: "1" },
    { name: "По рейтингу товара", id: "2" },
    { name: "По рейтингу продавца", id: "3" },
    { name: "По размеру кэшбека", id: "4" },
  ];
  return (
    <div>
      <div>
        <div
          className={
            activeDropdown === id
              ? styles.groupsCheckBox.active
              : styles.groupsCheckBox
          }
        >
          {itemsCheckBoxDrop.map((obj) => (
            <div className={styles.containerCheckbox}>
              <li key={obj.id}>{obj.name}</li>
              <RoundCheckbox
                initialChecked={isChecked}
                onChange={(checked) => setIsChecked(checked)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
