import React from 'react'
import { computerData } from '../stores/data/computers'
import { useParams } from 'react-router-dom'
const ComputersSingle = () => {
  const {id} = useParams();
  const product = computerData.find((item)=>item.id === id)
  return (
    <div className="ind-page">
      <div className="ind-image">
        <img src={product.image} alt={product.model}/>
      </div>
      <div className="ind-model">
        <h3>{product.company} {product.model}</h3>
      </div>
      <div className="ind-price">
        <h2>{product.price}</h2>
      </div>
    </div>
  )
}

export default ComputersSingle

