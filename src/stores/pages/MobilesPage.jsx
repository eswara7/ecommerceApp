import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const MobilesPage = () => {
    const [selectedProduct,setSelectedProduct] = useState([])
    const companyHandler = (i)=>{
            if(selectedProduct.includes(i)){
                setSelectedProduct(selectedProduct.filter(item=>item!==i))
            }else{
                setSelectedProduct([...selectedProduct,i])
            }
             
    }
    const filterProduct = selectedProduct.length === 0?
    mobileData: mobileData.filter((j)=>selectedProduct.includes(j.company))
  return (
    <>

    <Navbar/>
    <div className="fullpage">
    <div className="pro-selected">
        {
            mobileData.map((phone)=>{
                return (
                    <div className='pro-input'>   
                        <label>
                            <input type="checkbox" 
                            checked = {selectedProduct.includes(phone.company)}
                            onChange={()=>companyHandler(phone.company)}
                            />
                            {phone.company}
                        </label>
                    </div>
                )
            })
        }
    </div>
    <div className="pageSection">
        {
            filterProduct.map((item)=>{
                return <div>

                    <Link to = {`/mobiles/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt={item.model} />
                    </div>
                    </Link>
                    <div className='proModel'>
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

export default MobilesPage