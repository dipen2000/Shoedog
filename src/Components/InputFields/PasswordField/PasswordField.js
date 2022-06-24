import "./PasswordField.css";
const PasswordField = ({
  fieldTitle,
  fieldPlaceholder,
  type,
  name,
  children,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="password-field-container">
      <div className="flex-col gap-z-5">
        <label htmlFor={name}>{fieldTitle}</label>
        <div className="flex-row">
          <input
            className="input-field password-flex-grow"
            id={name}
            type={type}
            name={name}
            placeholder={fieldPlaceholder}
            onChange={onChange}
            value={value}
            required={required}
          />
          <div style={{ border: "3px solid var(--navbar-bg-color)" }}>
            <div className="flex-row justify-center-flex align-center-flex input-field-icon-container-height">
              <span className="input-field-icon">{children}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PasswordField };
