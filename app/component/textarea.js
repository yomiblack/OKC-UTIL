export default function Textarea({
  children,
  name,
  type,
  onChange,
  value,
  readonly,
}) {
  const activeClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700";

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {children}
      </label>
      <textarea
        id={name}
        name={name}
        className={activeClass}
        onChange={onChange}
        value={value}
        type={type}
        readOnly={readonly}
        required
      />
    </div>
  );
}
