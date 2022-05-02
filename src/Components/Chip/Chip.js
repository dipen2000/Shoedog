import "./Chip.css";
const Chip = ({ children }) => {
  return (
    <div className="curs-point chip-container flex-row align-center-flex justify-center-flex">
      {children}
    </div>
  );
};

export { Chip };
