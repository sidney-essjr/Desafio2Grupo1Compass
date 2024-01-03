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
      <h1 className="text-lunar text-[64px] font-bold font-garamond">{plant.name}</h1>
      <h2 className="pstyle text-[24px]">{plant.subtitle}</h2>
      <p className="text-verdinho border border-verdinho rounded-full px-3 py-1 font-semibold mr-2">{plant.label}</p>
      <p className="text-lunar text-[20px] rounded-full px-3 py-1 font-semibold">{plant.price}</p>
      <div>
        <a className="flex justify-center w-191 h-62 gap-10 bg-lunar text-white px-6 py-4" target="blank"
          href={`https://www.google.com/search?q=comprar+${plant.name}`} > Check Out </a>
     </div>
      <p className="text-black text-[24px] font-bold font-lato" >Features</p>
      <ul className="list-disc pl-6 mb-4 text-black text-[16px] font-raleway">
      {plant.features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
      </ul>
      <p className="text-black text-[24px] font-bold font-lato">Discription</p>
      <p className="text-base mb-4 text-black text-[16px] font-raleway">{plant.description}</p>
      </div>
    </li>
  );
};
