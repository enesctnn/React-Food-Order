function QuantityUpdateInput({ quantity, onAdd, onRemove }) {
  const buttonClass = 'text-3xl px-3 bg-[#312c1d] rounded-3xl text-white';
  return (
    <div className="flex flex-row items-center gap-5 text-lg">
      <button onClick={onRemove} className={buttonClass}>
        -
      </button>
      <p className="font-medium">{quantity}</p>
      <button onClick={onAdd} className={buttonClass}>
        +
      </button>
    </div>
  );
}
export default QuantityUpdateInput;
