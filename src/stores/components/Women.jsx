import React from 'react'
import {womanData} from "../data/woman"
const Women = () => {
    const firstFive = womanData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>women</h2>
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
    </>
  )
}

export default Women