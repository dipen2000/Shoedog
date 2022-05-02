import "./CheckboxField.css";
//
const CheckboxField = ({ name, children, onChange, checked }) => {
  return (
    <label htmlFor={name}>
      <input
        className="curs-point"
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      {children}
    </label>
  );
};

export { CheckboxField };
