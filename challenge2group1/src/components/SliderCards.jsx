import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import "../css/splide.css";
import Card from "./Card.jsx";

export default function SliderCards({ onSale, plants }) {
  const [isFetching, setIsFetching] = useState(true);
  const [availablePlants, setAvailablePlants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      if (onSale) {
        setAvailablePlants(plants.filter((plant) => plant.isInSale === true));
      } else {
        setAvailablePlants(plants.filter((plant) => plant.isInSale !== true));
      }
    } catch (error) {
      setError({
        message:
          error.message || "Could not fetch plants, please try again later.",
      });
      setIsFetching(false);
    }
  }, []);

  if (error) {
    return { error };
  }

  return (
    <div className="flex bg-white h-[560px] ">
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
