import React from 'react'
import { Link } from 'react-router-dom'

const Pcard = ({value}) => {
    return (
        <div className="Pcard" style={{overflow:'hidden'}}>
              <Link to={`/product/${value?._id}`} style={{textDecoration:'none',color:'inherit',overflow:'hidden'}}>
    <div className="img_sec">
        <img src={value?.imgSrc} alt="" />
    </div>
    <div className="rating">
        <span>4.8 💚</span>
    </div>
    <div className="title">
        <span>{value?.title?.slice(0,30)}...</span>
    </div>
    <div className="price">
        <span className='p'>₹{value?.originalPrice}</span>
        <span style={{color:' #ec5e28'}}> BEST BUY @ ₹{value?.price}  <small style={{color:'grey'}}>with coupon</small> </span>
    </div>
</Link>
        </div>
       
    )
}

export default Pcard
