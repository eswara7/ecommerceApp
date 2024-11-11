import React from "react";
import {watchData} from "../data/watch"
export function Watches(){  
    const firstFive = watchData.slice(0,5)
    return (<>
    <div className="proTitle">
        <h2>Watches</h2>
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
