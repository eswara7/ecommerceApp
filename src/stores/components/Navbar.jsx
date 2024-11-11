import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Navbar = ()=>{
    const {cartItems} = useCart()
    return (<>
        <div className="navSection">
            <Link to ="/ "><div className="title">
                <h2>E~mart</h2>
            </div></Link>

            <div className="search">
                <input type="text" placeholder="search..." />
            </div>

            <div className="user">
                <div className="userDetails">
                    Signin/Signup
                </div>
                <Link to ="/cart">
                <div className="cart">
                    Cart <span>{cartItems.length}</span>
                </div>
                </Link>
            </div>
        </div>
        <div className="subMenu">
            <ul>
                <Link to = "/ac"><li>AC</li></Link>
                <Link to = "/mobiles"><li>Mobiles</li></Link>
                <Link to = "/tv"><li>Tv</li></Link>
                <Link to = "/speakers"><li>Speakers</li></Link>
                <Link to = "/watches"><li>Watches</li></Link>
                <Link to = "/computers"><li>Computers</li></Link>
                <Link to = "/books"><li>Books</li></Link>
                <Link to = "/furniture"><li>Furniture</li></Link>
                <Link to = "/fridge"><li>Fridge</li></Link>
                <Link to = "/women"><li>Women</li></Link>
                <Link to = "/men"><li>Men</li></Link>
                <Link to = "/kitchen"><li>Kitchen</li></Link>

            </ul>
        </div>

    </>)
}

export default Navbar