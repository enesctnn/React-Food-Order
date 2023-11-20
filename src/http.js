export async function fetchAvailableMeals() {
  const response = await fetch('http://localhost:3000/meals');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch meals.');
  }

  return resData;
}

export async function orderMeal(items, customerData) {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order: {
        items,
        customer: customerData,
      },
    }),
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch orders.');
  }

  return resData;
}
