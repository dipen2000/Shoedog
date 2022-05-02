import "./RangeSliderField.css";
const RangeSliderField = ({ name, min, max, step }) => {
  return (
    <input
      className="curs-point"
      name={name}
      type="range"
      min={min}
      max={max}
      step={step}
    />
  );
};

export { RangeSliderField };
