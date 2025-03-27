import { useState, useRef, useEffect } from "react";
import "../../styles/ui/DropDown.scss";
function SmoothDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const [checked, setChecked] = useState<null | number>(null);
  const itemsSortrDrop = [
    "По дате публикации",
    "Цена по убыванию",
    "По рейтингу товара",
    "По размеру",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (index: number) => {
    setChecked(checked === index ? null : index);
  };
  useEffect(() => {
    const handleMovekOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMovekOutside);
    return () => {
      document.removeEventListener("mousedown", handleMovekOutside);
    };
  }, []);
  return (
    <div>
      <div className="smooth-dropdown">
        <button className="dropdown-button" onMouseEnter={toggleDropdown}>
          <span>
            {checked !== null ? itemsSortrDrop[checked] : "Не выбрано"}
          </span>
          <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
        </button>
        <div
          className={`dropdown-content ${isOpen ? "open" : ""}`}
          ref={dropdownContentRef}
        >
          <div className="container-drop-price">
            <ul className="groups-drop-sort">
              {itemsSortrDrop.map((name, index) => (
                <div className="sort" onClick={() => handleItemClick(index)}>
                  <li>{name}</li>
                  <span
                    className={`checked ${index === checked ? "active" : ""}`}
                  ></span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmoothDropdown;
