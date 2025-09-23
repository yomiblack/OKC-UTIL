export default function Input({
  children,
  name,
  type,
  onChange,
  value,
  readonly,
}) {
  const activeClass =
    // "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700";
    "bg-transparent placeholder:font-thin w-full p-3 outline-none focus:outline-none focus:shadow-inner hover:shadow-md hover:shadow-orange-300 transition-all duration-200 focus:shadow-orange-300 rounded-md dark:text-stone-50 text-stone-700 shadow-sm shadow-orange-200";

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-2"
      >
        {children}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        readOnly={readonly}
        required
        className={activeClass}
      />
    </div>
  );
}
