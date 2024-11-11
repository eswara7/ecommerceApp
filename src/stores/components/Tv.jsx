import React from 'react'
import {tvData} from "../data/tv"
const Tv = () => {
    const firstFive = tvData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>TV</h2>
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

export default Tv