import { useEffect, useState } from "react";
import CardAboutUs from "../components/AboutUsComponent/CardAboutUs";
import { fetchDevData } from "../data/https";

export default function About() {
  const [devs, setDevs] = useState([]);
  const [dataNotFetched, setdataNotFetched] = useState(false);

  useEffect(() => {
    async function fetchDevs() {
      setdataNotFetched(true);
      try {
        const dev = await fetchDevData();
        setDevs(dev);
        console.log(dev);
      } catch (error) {
        setError({ errorMessage: error.message });
      }
      setdataNotFetched(false);
    }
    fetchDevs();
  }, []);

  return (
    <section className="mb-2">
      {dataNotFetched ? (<p>Fetching data...</p>) : (
        devs.map((dev) => {
          return <CardAboutUs dev={dev} />;
        })
      )}
    </section>
  );
}
