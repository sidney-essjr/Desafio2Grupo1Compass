export default function Card({ plant }) {
  const price = parseFloat(plant.price.split("$")[1]);

  const discountPrice = price + price * (plant.discountPercentage / 100);

  // const dispatch = useDispatch()

  function displayMoreInformation() {
    // dispatch(changeToProductsPage(plant));
  }

  return (
    <button onClick={displayMoreInformation}>
      <div id={plant.id}>
        <img src={plant.imgUrl} alt={plant.name} />
        <div>
          <h1>{plant.name}</h1>
          <p>{discountPrice}</p>
          {plant.isInSale && <p>{plant.price}</p>}
          <span>{plant.label}</span>
        </div>
      </div>
    </button>
  );
}
