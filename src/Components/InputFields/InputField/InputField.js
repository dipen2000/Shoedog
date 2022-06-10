import "./InputField.css";
const InputField = ({
  fieldTitle,
  fieldPlaceholder,
  type,
  name,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="input-field-container">
      <div className="flex-col gap-z-5">
        <label htmlFor={name}>{fieldTitle}</label>
        <input
          className="input-field"
          id={name}
          type={type}
          name={name}
          placeholder={fieldPlaceholder}
          onChange={onChange}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

export { InputField };
