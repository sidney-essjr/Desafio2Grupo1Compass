import { Link } from "react-router-dom"; 

export default function Product({ plant }) {
    return (
    <li>
        <img src={`src/${plant.imgUrl}`} alt=" " />
        <h1>{plant.name}</h1>
        <h2>{plant.subtitle}</h2>
        <p>{plant.price}</p>
        <p><Link to={`${plant.id}`}>Saiba Mais</Link></p>
    </li>
    );
}