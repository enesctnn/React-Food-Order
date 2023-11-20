import { useContext, useState } from 'react';
import CartContext from '../store/CartContext';
import Modal from './UI/Modal';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/format';
import Input from './UI/Input';
import Button from './UI/Button';
import { orderMeal } from '../http';
import useHttp from '../hooks/useHttp';
import Error from './UI/Error';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function Checkout() {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const { data, sendRequest, isLoading, error, clearData } = useHttp(
    'http://localhost:3000/orders',
    requestConfig
  );

  const totalCost = items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleSubmition(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button
        textOnly
        className="mr-4 font-normal"
        type="button"
        onClick={hideCheckout}
      >
        Close
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  );

  if (isLoading) {
    actions = <span>Sending order data . . . </span>;
  }

  if (data && !error) {
    return (
      <Modal
        title="Success!"
        open={progress === 'checkout'}
        onClose={handleSucces}
      >
        <section className="py-14 text-xl">
          <p>Your order was submitted succesfully.</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
        </section>
        <div className="text-right mt-10">
          <Button className="font-medium" onClick={handleSucces}>
            Got it!!
          </Button>
        </div>
      </Modal>
    );
  }
  function handleSucces() {
    clearCart();
    hideCheckout();
    clearData();
  }

  return (
    <Modal
      title="Checkout"
      open={progress === 'checkout'}
      onClose={hideCheckout}
    >
      <form
        className="flex flex-col gap-5 w-[600px]"
        onSubmit={handleSubmition}
      >
        <p className="mt-2 text-lg hover:underline hover:cursor-pointer decoration-green-700">
          Total Amount:
          <strong className="text-green-600 ml-1">
            {currencyFormatter.format(totalCost)}
          </strong>
        </p>
        <Input
          required
          min={5}
          type="text"
          title="Full Name"
          id="name"
          className="w-2/3"
        />
        <Input
          required
          min={5}
          type="email"
          title="Email Adress"
          id="email"
          className="w-2/3"
        />
        <Input
          required
          min={5}
          type="text"
          title="Street"
          id="street"
          className="w-2/3"
        />
        <div className="flex">
          <Input
            required
            min={4}
            type="number"
            title="Postal Code"
            className="w-52"
            id="postal-code"
          />
          <Input
            required
            min={3}
            type="text"
            title="City"
            className="w-52"
            id="city"
          />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <div className="text-right mt-10">{actions}</div>
      </form>
    </Modal>
  );
}
