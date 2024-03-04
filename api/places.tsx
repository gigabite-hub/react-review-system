export async function fetchPlaces() {
    const response = await fetch('http://localhost:3000/places');
    console.log("response", response);
    return response.json()
}
export async function createReview({ placeID, newReview }) {
  try {
    // Fetch the specific place
    const response = await fetch(`http://localhost:3000/places`);

    if (!response.ok) {
      throw new Error(`Failed to fetch place. Status: ${response.status}`);
    }

    const places = await response.json();
   console.log("dfsf", places)
 
    const updatedPlaces = places.map((place) =>
    place.placeID === placeID
      ? {
          ...place,
          reviews: [...place.reviews, newReview],
        }
      : place
  );

    // Send a PUT request to update the specific place
    const updateResponse = await fetch(`http://localhost:3000/places/${placeID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlaces),
    });

    if (!updateResponse.ok) {
      throw new Error(`Failed to update place. Status: ${updateResponse.status}`);
    }

    return updateResponse.json();
  } catch (error) {
    console.error("Error in createReview:", error);
    throw error; // Rethrow the error to propagate it to the calling code
  }
}
