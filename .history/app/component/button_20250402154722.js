import Link from "next/link";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled,
}) {
  return (
    <div className="group">
      <button
        className="w-full transition-all duration-1000 bg-red-600 text-white border-b-8 border-b-red-600 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-red-600 group-hover:bg-red-600 group-hover:shadow-lg"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="px-4 py-2 duration-150 bg-orange-700 rounded-lg group-hover:bg-red-600">
          {children}
        </div>
      </button>
    </div>
  );
}

// export default function Button({
//   route,
//   children,
//   onClick,
//   type = "button",
//   disabled,
// }) {
//   const buttonContent = (
//     <button
//       className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 px-4 rounded hover:from-red-600 hover:to-orange-500 hover:shadow-sm disabled:opacity-50"
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );

//   return route ? <Link href={route}>{buttonContent}</Link> : buttonContent;
// }
