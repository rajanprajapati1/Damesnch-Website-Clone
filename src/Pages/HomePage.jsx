import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import SliderPage from '../components/SliderPage'
import OfferZone from '../components/OfferZone'
import ProductSlider from '../components/ProductSlider'
import BestSeller from '../components/BestSeller'
import CartPage from './CartPage'

const HomePage = () => {
    return (
        <div className='HomePage'>
        <Topbar/>
        <Navbar/>
        <CartPage/>
        <SliderPage/>
        <OfferZone/>
        <ProductSlider/>
        <BestSeller/>
        </div>
    )
}

export default HomePage
