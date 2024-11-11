import React from 'react'
import Navbar from '../components/Navbar'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'
const SpeakersPage = () => {
  return (
        <>
        <Navbar/>
        <div className="pageSection">
            {
                speakerData.map((item)=>{
                    return(
                        <div key = {item.id}>
                            <Link to ={`/speakers/${item.id}`}>
                            <div className="page-img">
                                <img src={item.image} alt={item.model} loading='lazy' />
                            </div>
                            </Link>
                            <div className="proModel">
                                {item.brand} {item.model}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
  )
}

export default SpeakersPage