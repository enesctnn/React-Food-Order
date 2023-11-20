import { useContext } from 'react';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/format';
import QuantityUpdateInput from './UI/QuantityUpdateInput';
import Modal from './UI/Modal';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';

export default function Cart({ cartQuantity }) {
  const { items: meals, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  const cartTotal = meals.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  let modalActions = (
    <Button
      textOnly
      onClick={handleCloseCart}
      className="font-normal hover:text-[#312c1d]"
    >
      Close
    </Button>
  );

  let modalTitle = 'Cart Is Empty';
  if (cartQuantity) {
    modalActions = (
      <>
        <p className="text-right m-3 text-2xl text-green-600 font-bold">
          {currencyFormatter.format(cartTotal)}
        </p>
        <Button
          textOnly
          className="mx-4 font-normal hover:text-[#312c1d]"
          onClick={handleCloseCart}
        >
          Close
        </Button>
        <Button
          className="hover:text-[#312c1d]"
          onClick={handleCheckout}
          type="button"
        >
          Go to Checkout
        </Button>
      </>
    );
    modalTitle = 'Your Cart';
  }

  function handleCloseCart() {
    hideCart();
  }

  function handleCheckout() {
    hideCart();
    showCheckout();
  }

  return (
    <Modal
      open={progress === 'cart'}
      title={modalTitle}
      actions={modalActions}
      onClose={progress === 'cart' ? handleCloseCart : null}
    >
      <ul className="py-4 flex flex-col gap-2">
        {meals.map((meal) => (
          <li key={meal.id} className="flex flex-row justify-between w-[500px]">
            <p className="font-medium ">
              {meal.name} - {meal.quantity}
              <span> x </span>
              <strong className="text-red-600">
                {currencyFormatter.format(meal.price)}
              </strong>
            </p>
            <QuantityUpdateInput
              quantity={meal.quantity}
              onAdd={() => addItem(meal)}
              onRemove={() => removeItem(meal, -1)}
            />
          </li>
        ))}
      </ul>
    </Modal>
  );
}
