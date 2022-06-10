import "./RadioInputField.css";
const RadioInputField = ({ name, children, checked, onChange }) => {
  return (
    <label htmlFor={name}>
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
