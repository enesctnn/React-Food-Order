import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  open,
  title,
  actions,
  children,
  onClose,
  className = ' ',
}) {
  const dialog = useRef();
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
      onClose={onClose}
      className={`backdrop:bg-yellow-950 backdrop:opacity-60 bg-[#e4ddd4] py-10 rounded-md animate-fade-slide-up outline-none ${className}`}
    >
      <div className="min-h-max min-w-max max-w-max px-10 outline-none flex flex-col justify-between select-none">
        <section>
          <h3 className="text-3xl font-bold">{title}</h3>
          {children}
        </section>
        {actions && (
          <form method="dialog" id="modal-actions" className="text-right mt-10">
            {actions}
          </form>
        )}
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
