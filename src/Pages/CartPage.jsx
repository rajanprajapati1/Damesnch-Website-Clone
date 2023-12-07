import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useCart } from '../utils/Utility';
import CartItem from '../components/CartItem';
const CartPage = ({ AddedItemList, handleAddToCart, DeleteItem }) => {
    const [selectedSize, setSelectedSize] = useState('Medium');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [TotalAmount, SetTotalAmount] = useState(0);
    const [TotalSavings, SetTotalSavings] = useState(0);
    const [InputValue, SetInputValue] = useState(null);
    const [couponApplied, setCouponApplied] = useState(false);

    const { ShowCART,
        HandleHideShow } = useCart();
    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    useEffect(() => {
        const originalPrices = AddedItemList?.map(val => val?.filterDataGet?.price);
        const totalOriginalPrice = originalPrices?.reduce((acc, curr) => acc + curr, 0);
        const MRPPrice = AddedItemList?.map(val => val?.filterDataGet?.originalPrice);
        const Totalsave = MRPPrice?.reduce((accu, curr) => accu + curr, 0)
        const Savings = (Number(Totalsave) - Number(totalOriginalPrice));
        SetTotalAmount(totalOriginalPrice);
        SetTotalSavings(Savings)
    }, [handleAddToCart])


    const HandleCheck = () => {
        if (!couponApplied && InputValue === 'RAJAN500' && TotalAmount >= 1000) {
            SetTotalAmount(TotalAmount - 500);
            setCouponApplied(true);
        } else {
            alert('COUPON INVALID & COUPON ALREADY APPLIED');

        }
    };


    return (
        <>
            {
                ShowCART ? (<>
                    <div className='cart_page' >
                        <div className="cart">
                            <div className="title">
                                <div className="First">
                                    <span>Bag </span>
                                    <small>{AddedItemList?.length || '0'} items</small>
                                </div>
                                <div className="second">
                                    <strong onClick={HandleHideShow}>X</strong>
                                </div>
                            </div>
                            <div className="total_Saving">
                                <span>₹{TotalSavings || '0'} Total Savings</span>
                            </div>
                            <div className="deliver_box">
                                <span><CiDeliveryTruck /> Yay!  <strong style={{ color: `${TotalAmount > 600 ? 'darkgreen' : 'red'}` }}>{TotalAmount > 600 ? 'No shipping fee' : 'Shipping Charges'}</strong> on this order </span>
                            </div>
                            <div className="added_product_card">
                                {AddedItemList?.map((value, i) => {
                                    return <CartItem Product={value?.filterDataGet} AddedItemList={AddedItemList} key={i} DeleteItem={DeleteItem} />
                                })}
                            </div>
                            <div className="Coupon">
                                <h2>Use Coupon</h2>
                                <br />
                                <div className="inputbox">
                                    <input type="text" placeholder='Enter Your Coupon Code' onChange={(e) => SetInputValue(e.target.value)} />
                                    <span onClick={HandleCheck}>Apply</span>
                                </div>
                            </div>
                            <div className="checkout_button">
                                <div className="box">
                                    <div className="first">
                                        <pre>₹{TotalAmount || '0'}</pre>
                                        <small>Total</small>
                                    </div>
                                    <div className="second">
                                        <span>Place Order <strong><BsArrowRight /></strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>) : (<></>)
            }
        </>
    )
}

export default CartPage
