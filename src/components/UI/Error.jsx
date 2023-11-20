export default function Error({ title, message }) {
  return (
    <div
      className="flex flex-col text-red-800 bg-red-300
    py-8 pl-10 pr-52 w-max rounded-lg mx-auto animate-fade-slide-up"
    >
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className="font-medium text-2xl">{message}</p>
    </div>
  );
}
