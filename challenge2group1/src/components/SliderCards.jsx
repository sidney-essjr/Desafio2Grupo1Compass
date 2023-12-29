import { fetchAvailablePlants } from "../data/https";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import "../css/splide.css";

export default function SliderCards({ title, onSale }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlants, setAvailablePlants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlants() {
      setIsFetching(true);

      try {
        let plants = await fetchAvailablePlants();

        if (onSale) {
          plants = plants.filter((plant) => plant.isInSale === true);
        } else {
          plants = plants.filter((plant) => plant.isInSale !== true);
        }

        setAvailablePlants(plants);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch plants, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchPlants();
  }, []);

  if (error) {
    return { error };
  }

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <Splide
          aria-label="Testimonials"
          options={{ fixedWidth: "300px", isNavigation: true }}
        >
          {!isFetching ? (
            <p>Fetching place data...</p>
          ) : (
            availablePlants.map((plant) => {
              return (
                <SplideSlide id={plant.id}>
                  <Card key={plant.id} plant={plant} />
                </SplideSlide>
              );
            })
          )}
        </Splide>
      </div>
    </div>
  );
}
