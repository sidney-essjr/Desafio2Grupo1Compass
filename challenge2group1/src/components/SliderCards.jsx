import { fetchAvailablePlants } from "../data/https";
import Card from "../Card.jsx";

export default function Slidercards() {
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
      {isFetching ? (
        <p>Fetching place data...</p>
      ) : (
        availablePlants.map((plant) => {
          <Card plant={plant} />;
        })
      )}
    </div>
  );
}
