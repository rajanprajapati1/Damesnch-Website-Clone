import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetData } from "../Data/Data";
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BsStarFill } from 'react-icons/bs';
import ReviewCard from '../components/ReviewCard';
import ReactImageMagnify from 'react-image-magnify';
import CartPage from './CartPage';
import { useCart } from '../utils/Utility';

const ProductPage = () => {
  const [filterDataGet, setFilterDataGet] = useState(null);
  const [showSelectedImage, SetshowSelectedImage] = useState();
  const { id } = useParams();
  const [SIzeslected, SetSIzeslected] = useState();
  // const [ItemAdd,SetItemAdd] = useState();
  const [AddedItemList, SetAddedItemList] = useState([]);
  const { HandleHideShow } = useCart();
  const FilterGetProduct = async () => {
    const res = await GetData(`product/${id}`);
    if (res) {
      SetSIzeslected(res?.imgSrc);
      setFilterDataGet(res);
    }
  };
  useEffect(() => {
    SetshowSelectedImage(filterDataGet?.imgSrc);
    FilterGetProduct();
    
  }, [id]);

  const handleAddToCart = () => {
    const newItem = {
      filterDataGet,
    };
    SetAddedItemList([...AddedItemList, newItem]);
    HandleHideShow();
  };
  const DeleteItem = (id) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to Delete this Item ?"
    );
    if (userConfirmed) {
      const NewFilterData = AddedItemList.filter(
        (val) => val.filterDataGet?.id !== id
      );
      SetAddedItemList(NewFilterData);
    } else {
    }
  };

  const OnclickImage = (image) => {
    SetshowSelectedImage(image);
  };
  return (
    <>
      <Topbar />
      <Navbar AddedItemList={AddedItemList} />
      <CartPage
        handleAddToCart={handleAddToCart}
        AddedItemList={AddedItemList}
        DeleteItem={DeleteItem}
      />
      <div className="productpage">
        <div className="product_shown">
          <div className="product_image">
            <img src={showSelectedImage || SIzeslected} alt="" />
            <br />
            <div className="mini_gallery">
              {filterDataGet?.smallimg?.map((val, i) => {
                return (
                  <img
                    src={val}
                    key={i}
                    alt=""
                    onClick={() => OnclickImage(filterDataGet?.smallimg[i])}
                  />
                );
              })}
            </div>
          </div>
          <div className="product_details">
            <div className="name">
              <div className="PD_detais">
                <span>{filterDataGet?.title}</span>
                <br />
                <br />
                <span style={{ color: 'black' }}>
                  MRP ₹{filterDataGet?.price}{" "}
                  <small style={{ color: 'grey' }} className="cut">
                    {" "}
                    {filterDataGet?.originalPrice}{" "}
                  </small>{" "}
                  {filterDataGet?.discount}% OFF
                </span>
                <br />
                <span>Inclusive of all taxes</span>
              </div>
              <span className="rating">⭐ {filterDataGet?.rating}(27)</span>
            </div>
            <div className="tags">
              {filterDataGet?.categories?.map((val, i) => {
                return  <Link to={`/men/category/${val}`}><button key={i}>{val}</button></Link>
              })}
            </div>
            <div className="printed">
              <span>
                Product : <strong>{filterDataGet?.title}</strong>
              </span>
              <br />
              <div className="img_gall">
                {filterDataGet?.smallimg?.map((val, i) => {
                  return (
                    <img
                      src={val}
                      key={i}
                      alt=""
                      width={'50px'}
                      height={'50px'}
                      onClick={() => OnclickImage(filterDataGet?.smallimg[i])}
                    />
                  );
                })}
              </div>
            </div>
            <div className="priceandcoupon">
              <p>
                BEST PRICE:{" "}
                <span style={{ color: 'green' }}>₹{filterDataGet?.price}</span>
                <br />
                <br />
                <span style={{ fontSize: '12px' }}>
                  Buy 2 & get 10% OFF, Buy 3 or more & get 15% <br />
                  OFF, on all innerwear (excluding packs). Coupon <br /> once
                  eligible will be auto-applied on{" "}
                </span>
                <checkout className="br" style={{ color: 'black' }}>
                  {" "}
                  Apply on checkout{" "}
                </checkout>
              </p>
              <span>
                {" "}
                <button>SAVE-EXTRA</button>
              </span>
            </div>
            <div className="size_chart">
              <span>SIZE WAIST36-38 IN / 90-95 CM</span>
              <div className="size_box">
                {filterDataGet?.sizes?.map((val) => {
                  return <span style={{ fontSize: '0.8rem' }}>{val}</span>;
                })}
              </div>
            </div>
            <div className="price_Sec">
              <strong>MRP ₹{filterDataGet?.originalPrice} </strong>
              <br />
              <small>Inclusive of all taxes</small>
            </div>
            <div className="deliver_Sec">
              <small style={{ color: 'grey' }}>
                <strong style={{ color: 'black', fontSize: '1rem' }}>
                  Free Delivery
                </strong>{" "}
                above ₹600, by Fri, 10 Nov
              </small>
              <br />
              <small style={{ color: 'grey', marginTop: '1rem' }}>
                Enter your pincode to check exact date
              </small>
              <br />
              <div className="input">
                <input type="text" placeholder="Enter Pincode" />
                <span>Change</span>
              </div>
              <div className="return_logo">
                <img
                  src="https://dacdn2.damensch.com/damensch/icons/30day1sttryguarantee.svg"
                  alt=""
                />
                <br />
                <small>30 Day 1st Try Guarantee</small>
              </div>
            </div>
            <div className="cart_button">
              <div className="box">
                <button className="heart">
                  <AiOutlineHeart />
                </button>
                <button className="bag" onClick={handleAddToCart}>
                  <LiaShoppingBagSolid />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="specification_page">
          <div className=" specification">
            <ul>
              <h2>Specifications</h2>
              <li>
                Superior breathability with ultra-light fabric for all-round
                wear
              </li>
              <li>Dual Side Pockets to help you do more with ease.</li>
              <li>Smooth-surface texture with Matt finish.</li>
              <li>Inner elastic waistband for added comfort stretch</li>
              <li>Hidden Button Fly for better shape and fit</li>
            </ul>
            <div className="flex_horz">
              <div className="LENGTH">
                <span>LENGTH</span>
                <small>Long</small>
              </div>
              <div className="FABRIC_TYPE">
                <span>FABRIC TYPE</span>
                <small>Premium Cotton,</small>
              </div>
            </div>
            <div className="perfect_For">
              <span>PERFECT FOR</span>
              <div className="images_a">
                <span>
                  <img
                    src="https://dacdn2.damensch.com/damensch/icons/lounging.svg"
                    alt=""
                  />
                  Lounging
                </span>
                <span>
                  {" "}
                  <img
                    src="https://dacdn2.damensch.com/damensch/icons/chilling.svg"
                    alt=""
                  />
                  Chilling
                </span>
                <span>
                  {" "}
                  <img
                    src="https://dacdn2.damensch.com/damensch/icons/everyday.svg"
                    alt=""
                  />
                  Everyday
                </span>
              </div>
            </div>
            <div className="WASH_CARE">
              <span style={{ color: '#859298', fontSize: '0.9rem' }}>
                WASH CARE
                <br />
                <p style={{ color: 'black' }}>
                  Machine wash gently. Do not bleach. Line dry in shade. Do not
                  iron on print.
                </p>
              </span>
            </div>
            <div className="products_origin_Det">
              <div className="origin">
                <h2>PRODUCT DETAILS</h2>
                <span>Country of Origin : India</span>
                <br />
                <span>Generic Name : Boxer Shorts</span>
                <br />
                <span>Quantity : 1N</span>
              </div>
              <div className="manufactured">
                <span style={{ color: '#859298', fontWeight: '400' }}>
                  {" "}
                  Manufactured and Marketed by:
                </span>

                <p>
                  {" "}
                  DaMENSCH Apparel Pvt Ltd, JB House, 2nd Floor,
                  <br /> No.110, 4th Cross, 5th Block, Koramangala Industrial{" "}
                  <br /> Layout, Bengaluru, Karnataka 560095.
                </p>
              </div>
            </div>
          </div>
          <div className="picture_sec">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: '',
                  isFluidWidth: true,
                  src: filterDataGet?.imgSrc, // Assuming this is the source of your image
                },
                largeImage: {
                  src: filterDataGet?.imgSrc, // Assuming this is the source of your image
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: 500, // Adjust the width of the magnified area as needed
                  height: 300, // Adjust the height of the magnified area as needed
                },
                zoomFactor: 1.5, // Adjust the zoom factor as needed
              }}
            />
          </div>
        </div>
        <div className="review_pages">
          <div className="first_Sec">
            <h3>Ratings & Reviews</h3>
            <br />
            <small>Based on 27 Customer Reviews</small>
            <br />
            <br />

            <h1>
              4.6 <span>/5</span>
            </h1>
            <br />
            <h2>
              <BsStarFill color="#ec5e28" className="fill" />{" "}
              <BsStarFill color="#ec5e28" className="fill" />{" "}
              <BsStarFill color="#ec5e28" className="fill" />{" "}
              <BsStarFill color="#ec5e28" className="fill" />{" "}
            </h2>
            <br />
            <small className="sm">Purchased this product?</small>
            <br />
            <button>Write a Review</button>
          </div>
          <div className="review_post">
            {[1, 2, 3, 4,5].map((val) => {
              return <ReviewCard />;
            })}
          </div>
        </div>
        <footer></footer>
      </div>
    </>
  );
};

export default ProductPage;
