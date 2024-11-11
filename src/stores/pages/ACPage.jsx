import React, { useState } from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ACPage = () => {

    const [selectedProduct,setSelectedProduct] = useState([])
    const companyHandler = (i)=>{
        if(selectedProduct.includes(i)){
            setSelectedProduct(selectedProduct.filter((item)=>item !== i))
        }
        else{
            setSelectedProduct([...selectedProduct,i])
        }
    }
    const filterProduct = selectedProduct.length === 0?
    acData: acData.filter((j)=>selectedProduct.includes(j.company))
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {
                acData.map((item)=>{
                    return(
                        <div className="pro-input">
                            <label>
                                <input type="checkbox"
                                    checked = {selectedProduct.includes(item.company)}
                                    onChange={()=>companyHandler(item.company)}
                                />
                                {item.company}
                            </label>
                        </div>
                    )
                })
            }
        </div>
        <div className='pageSection'>
            {
                filterProduct.map((item)=>{
                    return <div>

                        <Link to ={`/ac/${item.id}`}>
                            <div className='pageImg'>
                                <img src={item.image} alt={item.model} />
                            </div>
                        </Link>
                        <div className="proModel">
                            {item.company} {item.model}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
      
    </>
  )
}

export default ACPage