import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import Submenu from "./Submenu";
import {data} from '../Data/Data'
import { useCart } from "../utils/Utility";


const Navbar = ({AddedItemList}) => {
  const [FSubmenu,SetSubmenu] = useState(data[0]);
  const [SSubmenu,SetSSubmenu] = useState(data[1]);
  const [TSubmenu,SetTSubmenu] = useState(data[2]);
  const [ForSubmenu,SetForSubmenu] = useState(data[3]);
  const { HandleHideShow } = useCart();
  return (
    <div className="Navbar">
    <Link to={`/`} style={{textDecoration:'none'}}>
      <div className="nav_logo">
        <img
          src="https://dacdn2.damensch.com/damensch/icons/logo-head.svg"
          alt="logo"
        />
      </div>
    </Link>
      <div className="nav_menu">
        <div className="menu">
          <NavLink class="nav-link">Innerwear</NavLink>
          <Submenu submenuData={FSubmenu}/>
        </div>
        <div className="menu">
          <NavLink class="nav-link">Topwear</NavLink>
          <Submenu submenuData={SSubmenu}/>
        </div>
        <div className="menu">
          <NavLink class="nav-link">Bottomwear</NavLink>
          <Submenu submenuData={TSubmenu}/>
        </div>
        <div className="menu">
          <NavLink class="nav-link">Socks</NavLink>
        </div>
        <div className="menu">
          <NavLink class="nav-link">500 Day Collection</NavLink>
          <Submenu submenuData={ForSubmenu}/>
        </div>
        <div className="menu">
          <NavLink class="nav-link">A lot OFF</NavLink>
        </div>
        <div className="menu">
          <NavLink class="nav-link">Track Order</NavLink>
        </div>
        <div className="menu">
          <NavLink class="nav-link">Store Locator</NavLink>
        </div>
      </div>
      <div className="nav_button">
        <span>
          <BiUser />
        </span>
        <span>
          <AiOutlineHeart className="heart" />
        </span>
        <span className="badge" >
          <LiaShoppingBagSolid onClick={HandleHideShow} />
          <div className="number">
            {AddedItemList?.length || 0}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
