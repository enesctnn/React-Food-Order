import useHttp from '../hooks/useHttp';
import MealItem from './MealItem';
import Error from './UI/Error';
const requestConfig = { method: 'GET' };

export default function Meals() {
  const {
    data: mealsData,
    error,
    isLoading,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return (
      <p className="text-white text-2xl text-center">Fetching Meals . . .</p>
    );
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

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
