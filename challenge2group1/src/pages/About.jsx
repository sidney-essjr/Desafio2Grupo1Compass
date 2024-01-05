import { useEffect, useState } from "react";
import CardAboutUs from "../components/AboutUsComponent/CardAboutUs";
import { fetchDevData } from "../data/https";
import { dynamicPageTitle } from "../util/util";

export default function About() {
  const [devs, setDevs] = useState([]);
  const [dataNotFetched, setdataNotFetched] = useState(false);
  dynamicPageTitle(window.location.pathname);

  useEffect(() => {
    async function fetchDevs() {
      setdataNotFetched(true);
      try {
        const dev = await fetchDevData();
        setDevs(dev);
      } catch (error) {
        setError({ errorMessage: error.message });
      }
      setdataNotFetched(false);
    }
    fetchDevs();
  }, []);

  return (
    <section className="bg-gelo flex flex-wrap justify-center w-[] pb-10 md:b-20">
      {dataNotFetched ? (
        <p>Fetching data...</p>
      ) : (
        devs.map((dev) => {
          return <CardAboutUs dev={dev} />;
        })
      )}
    </section>
  );
}
