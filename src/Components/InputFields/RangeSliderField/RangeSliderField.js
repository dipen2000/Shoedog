import "./RangeSliderField.css";
const RangeSliderField = ({ name, min, max, step, onChange }) => {
  return (
    <input
      className="curs-point"
      name={name}
      type="range"
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    />
  );
};

export { RangeSliderField };
