import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { booksData } from '../stores/data/books';
const BooksSingle = () => {
    const { id } = useParams();
    const product = booksData.find((item) => item.id === id);

    return (
        <div className="ind-page">
            <div className="ind-image">
                <img src={product.image} alt={product.model} />
            </div>
            <div className="ind-model">
                <h3>{product.title} </h3>
            </div>
            <div className="ind-price">
                <h2>{product.price}</h2>
            </div>
           
        </div>
    );
}

export default BooksSingle;
