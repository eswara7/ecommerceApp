import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { furnitureData } from '../stores/data/furniture';


const FurnitureSingle = () => {
    const { id } = useParams();
    const product = furnitureData.find((item) => item.id === id);
    return (
        <div className="ind-page">
            <div className="ind-image">
                <img src={product.image} alt={product.model} />
            </div>
            <div className="ind-model">
                <h3>{product.brand} {product.model}</h3>
            </div>
            <div className="ind-price">
                <h2>{product.price}</h2>
            </div>
           
        </div>
    );
}

export default FurnitureSingle;
