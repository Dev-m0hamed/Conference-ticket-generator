import { useState } from "react";

function Input({ name, label, type = "text", placeholder = "" }) {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);

  function validateInput(e) {
    setValue(e.target.value);
  }

  function handleBlur() {
    if (name === "fullName") {
      setHasError(value.trim() === "");
    } else if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setHasError(!emailRegex.test(value));
    } else if (name === "gitHub") {
      setHasError(value.trim() === "");
    } else setHasError(false);
  }

  return (
    <>
      <label htmlFor={name} className="block text-lg mt-4 mb-2 md:mt-3">
        {label}
      </label>
      <input
        onChange={validateInput}
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
      {hasError && name === "email" && (
        <div aria-live="assertive" className="items-center text-xs mt-2 error">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
            />
            <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.004 10.462V7.596M8 5.569v-.042"
            />
          </svg>
          <span>Please enter a valid email address.</span>
        </div>
      )}
    </>
  );
}

export default Input;
