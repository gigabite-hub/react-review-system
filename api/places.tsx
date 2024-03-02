export async function fetchPlaces() {
    const response = await fetch('http://localhost:3000/places');
    console.log("response", response);
    return response.json()
}
export async function createReview({ placeID, newReview }) {
  const response = await fetch(`http://localhost:3000/places/${placeID}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview),
  });
  return response.json();
}
