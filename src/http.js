export async function fetchAvailableMeals() {
  const response = await fetch('http://localhost:3000/meals');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch meals.');
  }

  return resData.meals;
}
export async function fetchOrderedMeals(meals) {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'PUT',
    body: JSON.stringify({ meals }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch orders.');
  }

  return resData.message;
}
