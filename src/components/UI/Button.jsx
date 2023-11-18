export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly
    ? 'text-xl font-sans font-medium outline-none'
    : 'bg-yellow-500 text-black text-lg font-medium py-2 px-4 rounded-md';
  cssClasses += ' ' + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
