import { fetchAvailablePlants } from "../data/https";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import "@splidejs/react-splide/css";

export default function SliderCards() {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlants, setAvailablePlants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlants() {
      setIsFetching(true);

      try {
        const plants = await fetchAvailablePlants();
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
    return "An error occurred!";
  }

  return (
    <div>
      <Splide aria-label="Testimonials" options={{ fixedWidth: "300px" }}>
        {!isFetching ? (
          <p>Fetching place data...</p>
        ) : (
          availablePlants.map((plant) => {
            return (
              <SplideSlide>
                <Card plant={plant} />
              </SplideSlide>
            );
          })
        )}
      </Splide>
    </div>
  );
}
