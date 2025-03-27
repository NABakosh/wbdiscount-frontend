import { useState, useRef, useEffect } from "react";
import "../../styles/ui/DropDown.scss";
function CashDrop() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownContentRef = useRef(null);
  const [secondPrice, SetSecondPrice] = useState("");
  const [beginPrice, setBeginPrice] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
          <span>Цена:</span>
          <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
        </button>
        <div
          className={`dropdown-price-content ${isOpen ? "open" : ""}`}
          ref={dropdownContentRef}
        >
          <div className="group-input">
            <input
              type="text"
              value={beginPrice}
              className="inputPrice"
              placeholder="от 50%"
              onChange={(e) => setBeginPrice(e.target.value)}
            />
            -
            <input
              type="text"
              value={secondPrice}
              className="inputPrice"
              placeholder="до 50%"
              onChange={(e) => SetSecondPrice(e.target.value)}
            />
          </div>
          <button className="button">Применить</button>
        </div>
      </div>
    </div>
  );
}

export default CashDrop;
