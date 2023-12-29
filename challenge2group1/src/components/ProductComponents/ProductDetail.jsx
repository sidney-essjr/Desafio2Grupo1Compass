import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

export const ProductDetail = () => {
    // const [ itemId, setItemId ] = useState([]);
    const params  = useParams();

    // const getItemId = async () => {
    //     const res = await fetch(`http://localhost:3000/plants${params}`);
    //     const response = await res.json();
    //     setItemId(response);
    // }

    // useEffect(() => {
    //     getItemId();
    // })
    return (
        <li>
        <img src={`src/${params.imgUrl}`} />
        <h1>{params.name}</h1>
        <h2>{params.subtitle}</h2>
        <p>{params.label}</p>
        <p>{params.price}</p>
        <p><a target='_blank' href={`https://www.google.com/search?q=comprar+${params.name}`}>Check Out</a></p>
        <p>{params.features}</p>
        <p>{params.description}</p>
        </li>
    );
}


