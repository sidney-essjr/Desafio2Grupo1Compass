import Product from "../ProductComponents/Product";

export default function ListPlants({plants}) {

  return (
    <ul className="flex flex-wrap justify-center">
      <div className="w-full">
        <h1 className="text-lunar text-center text-[64px] font-bold font-garamond ">
          Lista de <span className="text-abacate">Produtos</span></h1>
      </div>
      {plants.map((plant) => (
        <Product key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}
