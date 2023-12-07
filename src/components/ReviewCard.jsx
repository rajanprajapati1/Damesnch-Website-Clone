import React from 'react'
import { BsStarFill } from 'react-icons/bs'


const ReviewCard = () => {
    return (
        <div className='reviewCard'>
            <strong>Customer Reviews ({Math.floor(Math.random()* 100)})</strong><br />
            <div className="flex">
                <div className="first">
                <small>Manjunatha Rathod</small>
            <div className="star"><BsStarFill color='#ec5e28'/>  <BsStarFill color='#ec5e28'/>  <BsStarFill color='#ec5e28'/>  </div><br />
                </div>
                <div className="second">
                    <span>   22-Aug-2022</span>
                    <span>✅ Verified Purchase</span>
                </div>
            </div>
            <span className='just'>Just right for me</span>
            <br />
            <p>I purchased these boxers from Damensch for the first time, and I was pleasantly surprised by the quality of the material and the fit. The boxers were soft and comfortable, and the color, material, and price were exactly what I was looking for. Overall, I had a great experience with this brand and would recommend it to others.</p>
        </div>
    )
}

export default ReviewCard
