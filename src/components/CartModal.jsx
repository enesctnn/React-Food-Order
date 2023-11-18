import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

const CartModal = forwardRef(({ title, actions }, ref) => {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={modal}
      className="backdrop:bg-yellow-950 backdrop:opacity-60 bg-[#e4ddd4] p-6 rounded-md animate-fade-slide-up"
    >
      <div className="min-h-[300px] max-h-max min-w-[600px] max-w-max outline-none flex flex-col justify-between select-none">
        <section>
          <h3 className="text-3xl font-bold">{title}</h3>
          <Cart />
        </section>
        <form method="dialog" id="modal-actions" className="text-right">
          {actions}
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
});
export default CartModal;
