import { useContext } from 'react';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/format';
import QuantityUpdateInput from '../UI/QuantityUpdateInput';

export default function Cart() {
  const { items: meals, addItem, removeItem } = useContext(CartContext);
  return (
    <ul className="py-4 flex flex-col gap-2">
      {meals.map((meal) => (
        <li key={meal.id} className="flex flex-row justify-between">
          <p className="font-medium ">
            {meal.name} - {meal.quantity} x
            {currencyFormatter.format(meal.price)}
          </p>
          <QuantityUpdateInput
            quantity={meal.quantity}
            onAdd={() => addItem(meal)}
            onRemove={() => removeItem(meal, -1)}
          />
        </li>
      ))}
    </ul>
  );
}
