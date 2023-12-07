import React from 'react'
import Slider from 'react-slick'
import { setting2,Productimg } from '../Data/Data'
import SCard from './SCard'

const ProductSlider = () => {
    return (
        <div className='ProductSlider'>
            <h2>What's New</h2>
            <div className="products_Slide">
                <Slider {...setting2}>
               {Productimg?.map((url,i)=>{
                return <SCard url={url}/>
               })}
                </Slider>
            </div>
        </div>
    )
}

export default ProductSlider
