import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {attributes,Productdata,GetData} from '../Data/Data'
import ProductOriginalCard from '../components/ProductOriginalCard'
import Pcard from '../components/Pcard'
const CategoryPage = () => {
  const [sortOption, setSortOption] = useState('');
  const [FilterData, setFilterData] = useState();
  const [isChecked, setIsChecked] = useState(false);
    const {id} = useParams();

    const FilterWieseCategory  =async()=>{
      const res = await GetData(`product`);
      if(res){
        setFilterData(res)
      }
    }
    useEffect(()=>{
      FilterWieseCategory();
    },[isChecked])
const handleCheckboxChange = (e, category, option) => {
  const newCheckedState = e.target.checked;
  setIsChecked(newCheckedState);

  if (newCheckedState) {
    const filteredData = FilterData.filter(item => item.categories.includes(option));
    setFilterData(filteredData);

    const isCategoryPresent = filteredData.some(data => data.categories.includes(category));
    console.log(`Category: ${category}, Option: ${option}, Checked: ${newCheckedState}, Category Present: ${isCategoryPresent}`);
  } else {
    setFilterData(FilterData);
    console.log(`Category: ${category}, Option: ${option}, Checked: ${newCheckedState}`);
  }
};
      const handleSortChange = (event) => {
        setSortOption(event.target.value);

        if (event.target.value === 'priceLowToHigh') {
            const filterLowprice = FilterData.slice();
            filterLowprice.sort((a, b) => a.originalPrice - b.originalPrice);
            setFilterData(filterLowprice)
        } else if (event.target.value === 'priceHighToLow') {
            const filterhighprice = FilterData.slice();
            filterhighprice.sort((a, b) => b.originalPrice - a.originalPrice);
            setFilterData(filterhighprice)
        } else if (event.target.value === 'discount') {
            const filterdiscountprice = FilterData.slice();
            filterdiscountprice.sort((a, b) => a.discount - b.discount);
            setFilterData(filterdiscountprice)
        }
      }
    return (<>
        <Topbar />
        <Navbar />
        <div className='Category'>
        <div className="category_page">
          <div className="category_title">
            <h2>{id}</h2>
            <span>{FilterData?.length} Results</span>
          </div>
        <div className="flex">
        <div className="first">
        <div className="filter">
<span>Filters</span>
        </div>
        {attributes?.map((category, index) => {
  return (
    <div className="Category_Section" key={index}>
      <span  style={{color:'#ec5e28'}}>{category.category}</span>
      <br />
      <ul>
        {category.options.map((option, i) => (
          <li key={i}>
            <span>
              {option.name}
              <input type="checkbox" onChange={(e) => handleCheckboxChange(e, category.category, option.name)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
})}

               </div>
        <div className="second">
          <div className="product_filter">
          <div className="sort_Section">
          <select value={sortOption} onChange={handleSortChange}>
  <option value="" disabled selected>
   Sort By : Relevance
  </option>
  <option value="priceLowToHigh">Sort By : Low to High</option>
  <option value="priceHighToLow">Sort By : High to Low</option>
  <option value="discount">Sort By : Discount</option>
</select>
          </div>
          <div className="product_listing">
          {FilterData?.slice(0,8)?.map((value,i)=>{
            return <Pcard value={value} key={i}/>
        
          })}
          </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </>
    )
}

export default CategoryPage
