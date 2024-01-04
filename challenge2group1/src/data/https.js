import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchPlants({ signal }) {
  const url = "http://localhost:3000/plants";

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the plants");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const plants = await response.json();

  return plants;
}

export async function fetchPlant({ signal, id }) {
  const url = "http://localhost:3000/plants/" + id;

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the plants");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const plant = await response.json();

  return plant;
}

export async function fetchDevData() {
  const response = await fetch("http://localhost:3000/devs");
  const devData = response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch dev data, try again later!");
  }
  return devData;
}

export function updatePlants(plant) {
  fetch("http://localhost:3000/plants", {
    method: "POST",
    body: JSON.stringify(plant),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
