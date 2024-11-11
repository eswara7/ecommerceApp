import React from 'react'
import { kitchenData } from '../stores/data/kitchen'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const KitchenSingle = () => {
    const {id} = useParams();
    const product = kitchenData.find((item)=>item.id === id)
  return (
    <div className="ind-page">
        <div className="ind-image">
            <img src={product.image} alt={product.model} />
        </div>
        <div className="ind-model">
            <h3>{product.brand} {product.model}</h3>
        </div>
        <div className="back-link">
            <Link to = "/kitchen">
            got back</Link>
        </div>
    </div>
  )
}

export default KitchenSingle