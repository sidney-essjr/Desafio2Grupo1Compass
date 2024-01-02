import { Link } from "react-router-dom"; 

export default function Product({ plant }) {
    return (
      <li className="px-2 py-2">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={`src/${plant.imgUrl}`} alt=" " />
          <div className="px-6 py-4">
            <div className="text-lunar text-[27px] font-bold font-garamond">
              {plant.name}
            </div>
            <p className="pstyle">{plant.subtitle}</p>
          </div>
          <div className="px-6 py-4">
            <span className=" text-verdinho border border-verdinho rounded-full px-3 py-1 text-sm font-semibold mr-2">
              {plant.label}{" "}
            </span>
            <span className=" text-lunar text-[20px] rounded-full px-3 py-1 font-semibold">
              {plant.price}{" "}
            </span>
          </div>
          <div className="flex justify-center bg-lunar text-white px-6 py-4">
            <Link to={`${plant.id}`}>Saiba Mais</Link>
          </div>
        </div>
      </li>
    );
}