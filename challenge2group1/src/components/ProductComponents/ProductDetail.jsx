import { useLoaderData } from "react-router-dom";

export const ProductDetail = () => {
  const plant = useLoaderData();

  return (
    <li>
      <img src={`../src/${plant.imgUrl}`} />
      <h1>{plant.name}</h1>
      <h2>{plant.subtitle}</h2>
      <p>{plant.label}</p>
      <p>{plant.price}</p>
      <p>
        <a
          target="blank"
          href={`https://www.google.com/search?q=comprar+${plant.name}`}
        >
          Check Out
        </a>
      </p>
      <p>{plant.features}</p>
      <p>{plant.description}</p>
    </li>
  );
};
