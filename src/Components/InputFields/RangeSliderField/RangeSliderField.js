import "./RangeSliderField.css";
const RangeSliderField = ({ name, min, max, step, onChange, value }) => {
  return (
    <input
      className="curs-point"
      name={name}
      type="range"
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
  );
};

export { RangeSliderField };
