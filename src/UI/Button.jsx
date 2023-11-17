export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly
    ? 'text-xl font-sans font-medium outline-none'
    : 'bg-yellow-500 text-black text-lg font-medium py-1 px-4';
  cssClasses += ' ' + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
