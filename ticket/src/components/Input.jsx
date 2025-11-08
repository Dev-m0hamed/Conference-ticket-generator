function Input({ name, label, type = "text", placeholder = '' }) {
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
        className="input p-2.5 border border-neutral-500 text-neutral-300"
      />
    </>
  );
}

export default Input;
