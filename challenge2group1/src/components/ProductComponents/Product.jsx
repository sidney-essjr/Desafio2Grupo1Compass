export default function Product({ plant }) {
    return (
    <li>
        <img src={`src/${plant.imgUrl}`} />
        <h1>{plant.name}</h1>
        <h2>{plant.subtitle}</h2>
        <p>{plant.price}</p>
        <p><button>Saiba Mais</button></p>
    </li>
    );
}