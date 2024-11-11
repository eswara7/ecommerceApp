import React from "react";
import {kitchenData} from "../data/kitchen"

export function Kitchen(){  
    const firstFive = kitchenData.slice(0,5)
    return (<>
    <div className="proTitle">
        <h2>Kitchen</h2>
    </div>
    <div className="proSection">
        {
            firstFive.map((item)=>{
                return <div className="imgBox">
                 <img className="proImg" src={item.image} alt={item.model} />
                </div>
            })
        }
    </div>
    </>)
}
