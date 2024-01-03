import Products from "../components/ProductComponents/Products";
import { useLoaderData } from "react-router-dom";

export default function Product() {
  const plants = useLoaderData();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Products plants={plants} />
      </div>
    </>
  );
}

export function loader({ params }) {
  const id = params.id;
  return fetch("http://localhost:3000/plants/" + id);
}
