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

export async function loader({ params }) {
  const id = params.id;
  const resp = await fetch("http://localhost:3000/plants/" + id);
  if (resp.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return resp;
}
