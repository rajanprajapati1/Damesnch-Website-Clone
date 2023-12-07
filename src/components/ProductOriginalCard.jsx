import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ProductOriginalCard = ({value}) => {
    return (
        <Link to={`/product/${value?._id}`} style={{textDecoration:'none',color:'inherit'}}>
        <div className='ProductOriginalCard'>
            <div className="img">
                <img src={value?.imgSrc || value?.smallimg[0]} alt=""  style={{backgroundColor :'grey'}}/>
            </div>
            <div className="details">
                <div className="Cpmyrating">
                    <span>{value?.brand}</span>
                    <span>⭐ {value?.rating}</span>
                </div>
                <div className="title">
                    <strong>{value?.title}</strong>
                </div>
                <div className="price">
                    <span>₹ {value?.price}   <small>₹{value?.originalPrice} </small> <span>{value?.discount}% OFF</span></span>
                </div>
            </div>
            <div className="overlay">
                <div className="sizes">
                    <span>Sizes Available</span>
                    <div className='center'>
                   {value?.sizes?.slice(0,3).map((val)=>{
                    return  <span>   {val} |     </span>
                   })}
                   </div>
                </div>
                <div className="rating">
                    <span>⭐ {value?.rating}</span>
                </div>
                <div className="add_Wishlist">
                 <span className='heart'><AiOutlineHeart/></span>
                 <span className='view'>Quick View</span>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ProductOriginalCard
