import { useRef } from 'react';
import Button from '../UI/Button';
import headerImg from '/logo.jpg';
import CartModal from './CartModal';

export default function Header() {
  const dialog = useRef();

  return (
    <header className="h-50 w-screen px-24 py-16 flex flex-row justify-between items-center text-yellow-500 select-none">
      <div className="flex flex-row h-10 items-center gap-4">
        <img
          src={headerImg}
          alt="restaurant logo"
          className="h-full rounded-3xl outline outline-2 outline-yellow-500"
        />
        <h1
          htmlFor="restaurant name"
          className="uppercase font-medium text-3xl"
        >
          ReactFood
        </h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={() => dialog.current.open()}>
          Cart (0)
        </Button>
      </nav>
      <CartModal ref={dialog} />
    </header>
  );
}
