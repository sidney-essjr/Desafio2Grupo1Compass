import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { fetchPlants } from "../data/https.js";
import "../css/splide.css";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

export default function SliderCards({ onSale }) {
  const [isFetching, setIsFetching] = useState(true);
  const [availablePlants, setAvailablePlants] = useState([]);
  const [error, setError] = useState();

  useEffect(async () => {
    try {
      const plants = await fetchPlants();
      if (onSale) {
        setAvailablePlants(plants.filter((plant) => plant.isInSale === true));
      } else {
        setAvailablePlants(plants.filter((plant) => plant.isInSale !== true));
      }
      setIsFetching(false);
    } catch (error) {
      setError({
        message:
          error.message || "Could not fetch plants, please try again later.",
      });
    }
  }, []);

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex mx-auto md:pt-10 md:pb-20 overflow-hidden ">
      <div className="w-11/12 mx-auto">
        <Splide
          aria-label="Testimonials"
          options={{ fixedWidth: "300px", isNavigation: true }}
        >
          {isFetching ? (
            <Loading />
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
