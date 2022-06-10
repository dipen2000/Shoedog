import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button className="curs-point" onClick={onClick}>
      {children}
    </button>
  );
};

export { ButtonPrimary };
