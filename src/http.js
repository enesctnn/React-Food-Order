export async function fetchAvailableMeals() {
  const response = await fetch('http://localhost:3000/meals');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch meals.');
  }

  return resData;
}

export async function fetchOrderedMeals(order) {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'PUT',
    body: JSON.stringify({ order }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch orders.');
  }

  return resData;
}
