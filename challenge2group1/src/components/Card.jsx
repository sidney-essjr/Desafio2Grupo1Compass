export default function Card({ plant }) {
  const price = parseFloat(plant.price.split("$")[1]);

  const discountPrice = price + price * (plant.discountPercentage / 100);

  // const dispatch = useDispatch()

  // function displayMoreInformation() {
  //   dispatch(changeToProductsPage(plant));
  // }

  return (
    <button type="button">
      <div id={plant.id}>
        {console.log(plant)}
        <img src={`src/${plant.imgUrl}`} alt={plant.name} />
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
