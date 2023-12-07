import React, { useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Submenu = ({submenuData}) => {
  return (
      <div className="submenu">
        <div className="main">
          {submenuData.categories.map((category, index) => (
            <div key={index} className={`section all`}></div>
          ))}
          {submenuData.categories.map((category, index) => (
            <div key={index} className="list_menu">
              <h2>{category.heading}</h2>
              {category.items.map((item, i) => (
                <Link to={`/men/category/${item}`} style={{textDecoration:'none',color:'black' }}>
                  <li key={i}>
                    <span className='menu_list'>{item}</span>
                    <span><BsArrowRight/></span>
                  </li>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Submenu
