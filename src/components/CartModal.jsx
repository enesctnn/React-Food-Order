import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

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
    <dialog ref={modal} className="backdrop:bg-yellow-950 backdrop:opacity-60 ">
      <h3>{title}</h3>
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});
export default CartModal;
