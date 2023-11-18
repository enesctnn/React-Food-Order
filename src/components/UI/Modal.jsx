import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import UserProgressContext from '../../store/UserProgressContext';

export default function Modal({
  open,
  title,
  actions,
  children,
  className = ' ',
}) {
  const dialog = useRef();
  const { hideCart, hideCheckout } = useContext(UserProgressContext);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`backdrop:bg-yellow-950 backdrop:opacity-60 bg-[#e4ddd4] p-6 rounded-md animate-fade-slide-up ${className}`}
    >
      <div className="min-h-[300px] max-h-max min-w-[600px] max-w-max outline-none flex flex-col justify-between select-none">
        <section>
          <h3 className="text-3xl font-bold">{title}</h3>
          {children}
        </section>
        <form method="dialog" id="modal-actions" className="text-right">
          {actions}
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
