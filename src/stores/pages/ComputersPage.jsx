import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const ComputerPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {
            computerData.map((item)=>{
                return <div>
                  <Link to ={`/computers/${item.id}`}>
                  <div className="pageImg">
                        <img src={item.image} alt={item.model} />
                    </div>
                  </Link>
                    <div className="proModel">
                        {item.brand} {item.model}
                    </div>
                </div>
            })
        }
    </div>
    </>
  )
}

export default ComputerPage