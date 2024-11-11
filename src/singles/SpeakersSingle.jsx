import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { speakerData } from '../stores/data/speaker'


const SpeakersSingle = () => {
    const { id } = useParams();
    const product = speakerData.find((item) => item.id === id);

    //console.log('urlId:', id);
    console.log('Product Found:', product);

    if (!product) {
        return <div>Speaker not found.</div>;
    }

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

export default SpeakersSingle;
