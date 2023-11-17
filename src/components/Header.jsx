import headerImg from '/logo.jpg';

export default function Header() {
  return (
    <header className="h-50 w-screen px-24 py-10 flex flex-row justify-between items-center text-yellow-500 select-none">
      <div className="flex flex-row h-10 items-center gap-4">
        <img
          src={headerImg}
          alt="restaurant logo"
          className="h-full rounded-3xl outline outline-2 outline-yellow-500"
        />
        <h2
          htmlFor="restaurant name"
          className="uppercase font-medium text-3xl"
        >
          ReactFood
        </h2>
      </div>
      <button className="text-xl">Cart </button>
    </header>
  );
}
