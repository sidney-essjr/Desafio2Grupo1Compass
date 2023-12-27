import { Product } from "./Product"
import { plants } from "../data/db.json";

export function Products() {
    return(
        <ul>
            {plants.map((plant) => {
                return <Product name={plant.name} subtitle={plant.subtitle} 
                label={plant.label} price={plant.price} features={plant.features} 
                description={plant.description} />;
            })}
        </ul>
    );
}