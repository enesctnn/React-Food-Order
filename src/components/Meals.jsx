import useFetch from '../hooks/useFetch';
import { fetchAvailableMeals } from '../http';
import MealItem from './MealItem';

export default function Meals() {
  const {
    isFetching,
    fetchedData: mealsData,
    error,
    setFetchedData,
  } = useFetch(fetchAvailableMeals, []);

  return (
    <section>
      <ul className="grid grid-cols-auto gap-4 max-w-6xl">
        {mealsData.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
}
