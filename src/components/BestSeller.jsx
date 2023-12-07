import React, { useEffect, useState } from 'react'
import ProductOriginalCard from './ProductOriginalCard'
import { setting3 ,GetData } from '../Data/Data'
import Slider from 'react-slick';
import axios from 'axios';


const BestSeller = () => {
const [ProductAll,SetProductAll] = useState();
    const ProductData =async () =>{
     const res = await GetData(`product`);
     if(res){
        SetProductAll(res);
        console.log(res)
     }
    }
    useEffect(()=>{
        ProductData();
    },[])
    return (<>   
         <div className='Bestsellers'>
        <h2>Bestsellers</h2>
        <Slider {...setting3}>
        {ProductAll?.map((value,i)=>{
            return <ProductOriginalCard value={value} key={i}/>
        })}
        </Slider>
        </div>
    </>

    )
}

export default BestSeller