import React from "react";
import {speakerData} from "../data/speaker"

export function Speaker(){  
    const firstFive = speakerData.slice(0,5)
    return (<>
    <div className="proTitle">
        <h2>Speakers</h2>
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
