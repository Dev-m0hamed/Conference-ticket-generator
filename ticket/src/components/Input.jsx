import { useState } from "react";

function Input({ name, label, type = "text", placeholder = "" }) {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
    if (e.target.value.trim()) setHasError(false);
  }

  function handleBlur() {
    if (!value.trim() && name === "fullName") setHasError(true);
  }
  return (
    <>
      <label htmlFor={name} className="block text-lg mt-4 mb-2 md:mt-3">
        {label}
      </label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        id={name}
        name={name}
        type={type}
        aria-required="true"
        required
        placeholder={placeholder}
        className={`input p-2.5 border border-neutral-500 text-neutral-300 ${
          hasError && "error-border"
        }`}
      />
    </>
  );
}

export default Input;
