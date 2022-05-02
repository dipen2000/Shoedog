import "./CheckboxField.css";
// , onChange, checked
const CheckboxField = ({ name, children }) => {
  return (
    <label htmlFor={name}>
      <input
        className="curs-point"
        type="checkbox"
        id={name}
        name={name}
        // onChange={onChange}
        // checked={checked}
      />
      {children}
    </label>
  );
};

export { CheckboxField };
