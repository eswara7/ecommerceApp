import React from "react";
import {acData} from "../data/ac"


const AC = ()=>{
    const firstFive = acData.slice(0,5)
    return(
        <>
            <div className="proTitle">
                  <h2>AC</h2>
            </div>
        <div className="proSection">
            {
            firstFive.map((item)=>{
                return (
                <div className="imgBox">
                    <img className="proImg" src={item.image} alt={item.model}/>
                </div>)
            })
            }
        </div>
        </>
    )
}
export default AC