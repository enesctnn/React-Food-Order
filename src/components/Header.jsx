import { useContext, useEffect, useState } from 'react';
import Button from './UI/Button';
import headerImg from '/logo.jpg';
import CartContext from '../store/CartContext';
import Cart from './Cart';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const [cartAnimateClass, setCartAnimateClass] = useState('animate-bump');
  const cartQuantity = items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  useEffect(() => {
    setCartAnimateClass('');
    const time = setTimeout(() => {
      setCartAnimateClass('animate-bump');
    }, 10);
    return () => clearTimeout(time);
  }, [cartQuantity]);

  return (
    <>
      <Cart cartQuantity={cartQuantity} />
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
          <Button textOnly className={cartAnimateClass} onClick={showCart}>
            Cart ({cartQuantity})
          </Button>
        </nav>
      </header>
    </>
  );
}
