import { useLoaderData } from "react-router-dom";

export const ProductDetail = () => {
  const plant = useLoaderData();

  return (
    <li>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
      <div className="md:w-1/2">
      <img className="w-752 h-690 flex-shrink-0 opacity-90 bg-cover bg-center bg-lightgray" 
      src={`../src/${plant.imgUrl}`} /></div>
      </div>
      <div className="md:w-1/2 p-8">
      <h1 className="text-3xl font-bold mb-4">{plant.name}</h1>
      <h2 className="text-lg text-gray-600 mb-4">{plant.subtitle}</h2>
      <p className="text-green-500 font-semibold mb-4">{plant.label}</p>
      <p className="text-2xl font-bold mb-4">{plant.price}</p>
      <p>
        <a target="blank"
          href={`https://www.google.com/search?q=comprar+${plant.name}`} >
          Check Out
        </a>
      </p>
      <ul className="list-disc pl-6 mb-4">{plant.features}</ul>
      <p className="text-base mb-4">{plant.description}</p>
      </div>
    </li>
  );
};
