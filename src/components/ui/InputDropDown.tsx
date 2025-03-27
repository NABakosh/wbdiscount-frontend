type InputDropDowndownProps = {
  dropIcon: string;
  name: string;
  id: string;
  setActiveDropdown: (i: null | string) => void;
};

const InputDropDowndown = ({
  id,
  dropIcon,
  name,
  setActiveDropdown,
}: InputDropDowndownProps) => {
  return (
    <div className="dropdown">
      <span>{name} </span>
      <img src={dropIcon} alt="" onClick={() => setActiveDropdown(id)} />
    </div>
  );
};

export default InputDropDowndown;
