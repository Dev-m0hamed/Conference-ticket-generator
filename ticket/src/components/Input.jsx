import { useFormContext } from "react-hook-form";

function Input({ name, label, type = "text", placeholder = "", rules }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <>
      <label htmlFor={name} className="block text-lg mt-4 mb-2 md:mt-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-required="true"
        required
        placeholder={placeholder}
        className={`input p-2.5 border border-neutral-500 text-neutral-300 ${
          error && "error-border"
        }`}
        {...register(name, rules)}
      />
      {name === "email" && error && (
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
          <span>{error.message}</span>
        </div>
      )}
    </>
  );
}

export default Input;
