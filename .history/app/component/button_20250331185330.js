import Link from "next/link";

export default function Button({
  route,
  children,
  onClick,
  type = "button",
  disabled,
}) {
  return (
    <div className="group">
      <button className="w-full md:w-auto bg-orange-700 text-white border-b-8 border-b-orange-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-orange-700">
        <div className="px-8 py-4 bg-orange-500 rounded-lg">{children}</div>
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
