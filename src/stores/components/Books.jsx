import React from "react";
import {booksData} from "../data/books"

const Books = () =>{
    const firstFive = booksData.slice(0,5)
    return(
        <>
        <div className="proTitle">
            Books
        </div>
        <div className="proSection">
            {
                firstFive.map((item)=>{
                    return <div className="imgBox">
                         <img className="proImg" src={item.image} alt={item.title} />
                    </div>
                })
            }
        </div>
        </>
    )
}
export default Books







