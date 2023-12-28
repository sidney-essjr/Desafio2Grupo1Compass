export async function fetchAvailablePlants() {
  const response = await fetch("http://localhost:3000/plants");
  const plants = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return plants;
}
