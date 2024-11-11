import React from 'react'
import { menData } from '../stores/data/men';
import { useParams } from 'react-router-dom'
const MenSingles = () => {
  const {id} = useParams();
  const product = menData.find((item)=>item.id === id)
  return (
    <div className="ind-page">
      <div className="ind-image">
        <img src={product.image} alt={product.model}/>
      </div>
      <div className="ind-model">
        <h3>{product.brand} {product.model}</h3>
      </div>
      <div className="ind-price">
        <h2>{product.price}</h2>
      </div>
    </div>
  )
}

export default MenSingles

