import React from 'react'
import { useParams } from 'react-router-dom'
import { tvData } from '../stores/data/tv'
const TvSingle = () => {
    const {id} = useParams()
    console.log(id)
    const product = tvData.find((item)=>item.id === id)
    console.log(product)
  return (
    <div className="ind-page">
       <div className="ind-image">
            <img src={product.image} alt = {product.model}  />
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

export default TvSingle