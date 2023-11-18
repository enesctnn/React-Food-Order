import { useContext, useRef } from 'react';
import Button from '../UI/Button';
import headerImg from '/logo.jpg';
import CartModal from './CartModal';
import CartContext from '../store/CartContext';

export default function Header() {
  const dialog = useRef();
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;

  let ModalActions = <Button className=" bg-white ">Close</Button>;
  if (cartQuantity) {
  }

  return (
    <>
      <CartModal ref={dialog} />
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
          <Button textOnly onClick={() => dialog.current.open()}>
            Cart ({cartQuantity})
          </Button>
        </nav>
      </header>
    </>
  );
}
