import { useLoaderData } from "react-router-dom";

export const ProductDetail = () => {
  const plant = useLoaderData();

  return (
    <li className="flex flex-col md:flex-row bg-gelo items-center h-4/6">
      <div className="md:w-1/2">
        <img
          className="w-[752px] h-[690px] first-line:flex-shrink-0 opacity-90 bg-cover-repeat bg-center"
          src={`../src/${plant.imgUrl}`}
        />
      </div>

      <div className="md:w-1/2 p-8">
        <h1 className="text-lunar text-[64px] font-bold font-garamond">
          {plant.name}
        </h1>
        <h2 className="font-raleway text-textgray text-[24px]">
          {plant.subtitle}
        </h2>
        {plant.label.map((label) => {
          return (
            <p className=" text-verdinho border border-verdinho rounded-[100px] bg-[#F6FFF6] inline-flex mr-6 mt-6 py-2 px-3">
              {label}
            </p>
          );
        })}
        <p className="text-lunar text-[24px] font-lato px-3 py-6 font-semibold">
          {plant.price}
        </p>
        <div>
          <a
            className="flex justify-center items-center w-[191px] h-[60px] bg-lunar text-white shadow-md hover:shadow-lg focus:outline-none"
            target="blank"
            href={`https://www.google.com/search?q=comprar+${plant.name}`}
          >
            {" "}
            Check Out{" "}
          </a>
        </div>
        <p className="text-black text-[24px] font-bold font-lato py-6">
          Features
        </p>
        <ul className="list-disc pl-6 mb-4 text-black text-[16px] font-raleway">
          {plant.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="text-black text-[24px] font-bold font-lato">
          Discription
        </p>
        <p className="text-base mb-4 text-black text-[16px] font-raleway">
          {plant.description}
        </p>
      </div>
    </li>
  );
};
