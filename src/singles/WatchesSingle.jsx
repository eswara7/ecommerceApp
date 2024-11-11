import React from 'react'
import { watchData } from '../stores/data/watch'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const WatchesSingle = () => {
    const {id} = useParams();
    const product = watchData.find((item)=>item.id === id)
  return (
    <div className="ind-page">
        <div className="ind-image">
            <img src={product.image} alt={product.model} />
        </div>
        <div className="ind-model">
            <h3>{product.brand} {product.model}</h3>
        </div>
        <div className="back-link">
            <Link to = "/watches">
            got back</Link>
        </div>
    </div>
  )
}

export default WatchesSingle