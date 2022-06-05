import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button className="curs-point btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export { ButtonPrimary };
