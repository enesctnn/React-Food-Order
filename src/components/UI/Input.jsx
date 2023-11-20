export default function Input({ id, title, className, ...props }) {
  return (
    <div id={id} className="flex flex-col mr-3">
      <label className="font-bold text-lg" htmlFor={id}>
        {title}
      </label>
      <input
        {...props}
        id={id}
        name={id}
        className={`outline-blue-500 p-1 rounded-md font-medium text-xl ${className}`}
      />
    </div>
  );
}
