import { currencyFormatter } from '../util/format';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  return (
    <li
      key={meal.id}
      className="text-white rounded-2xl overflow-hidden shadow-lg text-center bg-[#1d1a16]"
    >
      <article className="h-full flex flex-col justify-between items-center">
        <img
          src={`http://localhost:3000/${meal.image}`}
          className="object-cover w-full h-80"
          alt={meal.name}
        />
        <h3 className="font-bold text-2xl m-3">{meal.name}</h3>
        <div className="bg-yellow-300 bg-opacity-20 text-lg text-yellow-400 font-bold py-1 px-5 rounded-md">
          {currencyFormatter.format(meal.price)}
        </div>
        <p className="m-4 font-medium text-lg">{meal.description}</p>
        <div className="mb-6 rounded-md overflow-hidden">
          <Button key={meal.id} onClick={() => addItem(meal)}>
            Add to Cart
          </Button>
        </div>
      </article>
    </li>
  );
}
