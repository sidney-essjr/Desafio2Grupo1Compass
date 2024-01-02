import { Link } from "react-router-dom";

export default function Card({ plant }) {
  const price = parseFloat(plant.price.split("$")[1]);

  const discountPrice = (
    price -
    price * (plant.discountPercentage / 100)
  ).toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div id={plant.id}>
      <Link to={`${plant.id}`}>
        <button type="button">
          <img src={`src/${plant.imgUrl}`} alt={plant.name} />
          <div>
            <h1>{plant.name}</h1>
            <p>{discountPrice}</p>
            {plant.isInSale && <p>{plant.price}</p>}
            {plant.label.map((label) => {
              return <p>{label}</p>;
            })}
          </div>
        </button>
      </Link>
    </div>
  );
}
