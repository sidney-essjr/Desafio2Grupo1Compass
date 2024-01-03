// export async function fetchAvailablePlants() {
//   const response = await fetch("http://localhost:3000/plants");
//   const plants = await response.json();

//   if (!response.ok) {
//     throw new Error("Failed to fetch places");
//   }

//   return plants;
// }


export async function fetchDevData(){
  const response = await fetch("http://localhost:3000/devs");
  const devData = response.json();
  

  if(!response.ok){
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
