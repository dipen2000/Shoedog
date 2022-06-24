import "./RadioInputField.css";
const RadioInputField = ({ name, children, checked, onChange }) => {
  return (
    <label htmlFor={name} className="flex-row align-center-flex gap-1">
      <input
        className="curs-point"
        type="radio"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export { RadioInputField };
