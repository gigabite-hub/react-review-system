export async function fetchPlaces() {
    const response = await fetch('http://localhost:3000/places');
    console.log("response", response);
    return response.json()
}