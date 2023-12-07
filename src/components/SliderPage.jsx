import React, { useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings, imageUrls } from '../Data/Data'
import {BiLeftArrowCircle,BiRightArrowCircle} from 'react-icons/bi';
const SliderPage = () => {
    const SliderRef = useRef();
    const previousSlide = () => {

        SliderRef.current.slickPrev();
      }
    
      const nextSlide = () => {
        SliderRef.current.slickNext();
      }
    
    return (
        <div className='slider'>
                <button onClick={previousSlide}><BiLeftArrowCircle/></button>
            <div className="image_box">
                <Slider {...settings} ref={SliderRef}>
                    {imageUrls?.map((url, i) => {
                        return <img src={url} alt={`images${i}`} />
                    })}
                </Slider>
            </div>
                <button onClick={nextSlide}><BiRightArrowCircle/></button>
        </div>
    )
}

export default SliderPage
