import useFetch from '../hooks/useFetch';
import { fetchAvailableMeals } from '../http';

export default function Meals() {
  const {
    isFetching,
    fetchedData: mealsData,
    error,
    setFetchedData,
  } = useFetch(fetchAvailableMeals, []);
  return (
    <section>
      <ol className="grid grid-cols-auto gap-4 max-w-6xl">
        {mealsData.map((meal) => (
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
                ${meal.price}
              </div>
              <p className="m-4 font-medium text-lg">{meal.description}</p>
              <div className="mb-6 rounded-md overflow-hidden">
                <button className="bg-yellow-500 text-black text-lg font-medium py-1 px-4">
                  Add to Cart
                </button>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
