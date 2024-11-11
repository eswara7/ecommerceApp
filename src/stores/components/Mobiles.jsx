
import {mobileData} from "../data/mobiles"
const Mobiles = ()=>{
    const firstFive = mobileData.slice(0,5)
    return (
        <>
        <div className="proTitle">
             <h2>mobiles</h2>
        </div>
        <div className="proSection">
        {
            firstFive.map((item)=>{
               return <div className="imgBox">
                <img className = "proImg" src={item.image} alt={item.model}/>
               </div>
            })
        }
    </div>
        </>
    )
}
export default Mobiles