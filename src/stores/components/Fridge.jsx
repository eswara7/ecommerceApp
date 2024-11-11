import React from "react";

import {fridgeData} from "../data/fridge";

const Fridge =()=>{
    const firstFive = fridgeData.slice(0,5)
    return(
     <>
     <div className="proTitle">
        <h2>Refrigerator</h2>
     </div>
     <div className="proSection">
        {
            firstFive.map((item)=>{
                return <div className="imgBox">
                    <img className = "proImg" src={item.image} alt={item.model} />
                </div>
            })
        }
     </div>
    </>)
}  
export default Fridge