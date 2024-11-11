import React from 'react'
import {menData} from "../data/men"
const Men = () => {
    const firstFive = menData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Men</h2>
    </div>
    <div className='proSection'>
    {
        firstFive.map((item)=>{
            return <div className='imgBox'>
                <img className = "proImg" src={item.image} alt={item.model} />
            </div>
        })
    }
    </div>
    </>
  )
}

export default Men