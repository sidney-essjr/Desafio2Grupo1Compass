import { useState, useEffect } from "react";
import Product from "../ProductComponents/Product";

export default function ListPlants() {
  const [loadedListPlants, setLoadedListPlants] = useState([]);

  useEffect(() => {
    async function fetchListPlants() {
      const response = await fetch("http://localhost:3000/plants");

      if (!response.ok) {
        //...
      }
      const listPlants = await response.json();
      setLoadedListPlants(listPlants);
    }

    fetchListPlants();
  }, []);
  
  return (
    <ul className="flex flex-wrap justify-center">
      {loadedListPlants.map((plant) => (
        <Product key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}
