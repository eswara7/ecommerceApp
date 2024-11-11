import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useCart } from '../stores/context/CartContext'
import Navbar from '../stores/components/Navbar'
const MobileSingle = () => {
    const {id} = useParams()
    const {addToCart} = useCart()
    const product = mobileData.find((item)=>item.id === id)
  return ( 
    <>
    <Navbar/>
    <div className="ind-section">

    <div className="ind-image">
        <img src={product.image} alt={product.model} />
    </div>

    <div className="ind-details">
        <div className="ind-model space">
            <h3>{product.company} {product.model}</h3>
        </div>

        <div className="ind-price space">
            <h2>{product.price}</h2>
        </div>

        <div className="ind-desc space">
            <p>{product.description}</p>
        </div>
        <button onClick={()=>addToCart(product)} >Add to cart</button>
    </div>

    </div>
    </>
  )
}

export default MobileSingle