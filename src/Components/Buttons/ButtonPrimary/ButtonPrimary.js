import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick, disabled }) => {
  return (
    <button
      className="curs-point btn-primary"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary };
