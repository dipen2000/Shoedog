import "./Chip.css";

const Chip = ({ children, onClick, style }) => {
  return (
    <div
      style={style}
      className="curs-point chip-container flex-row align-center-flex justify-center-flex"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Chip };
