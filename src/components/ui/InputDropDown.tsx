import { useRef } from "react";

type InputDropDownProps = {
  dropIcon: string;
  name: string;
  id: string;
  setActiveDropdown: (i: null | string) => void;
  isActive: boolean;
  activeDropdown: string | null;
};

const InputDropDown = ({
  id,
  dropIcon,
  name,
  setActiveDropdown,
  // activeDropdown,
  isActive,
}: InputDropDownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header">
        <span>{name}</span>
        <img
          src={dropIcon}
          alt="Toggle dropdown"
          onClick={() => setActiveDropdown(id)}
          className={`dropdown-icon ${isActive ? "rotated" : ""}`}
        />
      </div>
    </div>
  );
};

export default InputDropDown;
