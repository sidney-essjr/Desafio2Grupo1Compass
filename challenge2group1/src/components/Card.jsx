import { Link } from "react-router-dom";

export default function Card({ plant }) {
  const price = parseFloat(plant.price.split("$")[1]);

  const discountPrice = (
    price -
    price * (plant.discountPercentage / 100)
  ).toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className=" shadow bg-white pb-8" id={plant.id}>
      <Link to={`${plant.id}`}>
        <button type="button">
          <img src={`src/${plant.imgUrl}`} alt={plant.name} />
          <div>
            <h1 className=" header-card">{plant.name}</h1>
            <div className="flex mb-2">
              {" "}
              <p className="price-card">{discountPrice}</p>
              {plant.isInSale && (
                <p className="discount-card">{plant.price}</p>
              )}{" "}
            </div>
            <p className="label-card">{plant.label[0]}</p>
          </div>
        </button>
      </Link>
    </div>
  );
}
