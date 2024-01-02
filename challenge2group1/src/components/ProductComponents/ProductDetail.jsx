import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const ProductDetail = () => {
    const {id} = useParams();
    const [ itemId, setItemId ] = useState([]);

    useEffect(() => {
        const getItemId = async () => {
            const res = await fetch(`http://localhost:3000/plants/${id}`);
            const response = await res.json();
            setItemId(response);
        }
        getItemId();
    },[])

    return (
        <li>
        <img src={`../src/${itemId.imgUrl}`} />
        <h1>{itemId.name}</h1>
        <h2>{itemId.subtitle}</h2>
        <p>{itemId.label}</p>
        <p>{itemId.price}</p>
        <p><a target='blank' href={`https://www.google.com/search?q=comprar+${itemId.name}`}>Check Out</a></p>
        <p>{itemId.features}</p>
        <p>{itemId.description}</p>
        </li>
    );
}


