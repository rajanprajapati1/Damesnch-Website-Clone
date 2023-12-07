import React from 'react'
import { MdDeleteForever } from 'react-icons/md'


const CartItem = ({handleSizeChange,selectedSize,AddedItemList,
    selectedQuantity,
    handleQuantityChange,Product , DeleteItem}) => {
    return (<>
        <div className="card">
        <div className="first_Sec">
            <img src={Product?.imgSrc} alt="" />
        </div>
        <div className="second_secCart">
            <span className='cart_title'>{Product?.title}</span>
            <br />
            <span className='card_price'>₹{Product?.price} <small>₹{Product?.originalPrice}</small> <b>{Product?.discount}% off</b></span>
            <br />
            <small className='g'>30 Day 1st Try Guarantee</small>
            <br />
            <div className='options'>
                <label htmlFor="size">Size :
                    <select id="size" value={selectedSize} onChange={handleSizeChange}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <br />

                <label htmlFor="quantity">Quantity :
                    <select id="quantity" value={selectedQuantity} onChange={handleQuantityChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </label>

            </div>
        </div>
        <div className="third_Sec">
            <span onClick={()=>DeleteItem(Product?.id)}><MdDeleteForever /></span>
        </div>
    </div>
    </>
    )
}

export default CartItem
