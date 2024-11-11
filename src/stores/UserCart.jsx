import React from 'react'
import { useCart } from './context/CartContext'

const UserCart = () => {
    const {cartItems,addToCart,removeFromCart} = useCart( )
  return (
    <div>
        {
            cartItems.map((item)=>{
                return(
                    <div className="cart-section">
                        <div className="cart-image">
                            <img src={item.image} alt={item.model} />
                        </div>
                        <div className="cart-details">
                            <h3>{item.product}</h3>
                            <h3>{item.model}</h3>
                            <h2>{item.price}</h2>
                        </div>
                    </div>
                )
            })

        }
    </div>
  )
}

export default UserCart