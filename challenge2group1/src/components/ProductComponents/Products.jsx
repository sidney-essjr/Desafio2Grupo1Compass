import Product from "../ProductComponents/Product";

export default function ListPlants({plants}) {

  return (
    <ul className="flex flex-wrap justify-center bg-gelo py-5 md:py-10">
      <div className="w-full pb-5 md:pb-10 ">
        <h1 className="text-lunar text-center text-[64px] font-bold font-garamond ">
          Our plants <span className="text-abacate">for sale</span></h1>
      </div>
      {plants.map((plant) => (
        <Product key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}
