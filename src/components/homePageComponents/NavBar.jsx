import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { MdMenu, MdClose, MdHome, MdHeadphones, MdSpeaker, } from "react-icons/md";
import { BsEarbuds } from "react-icons/bs";
import Logo from './images/audiophile.png'
import { IoCartOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
import MobNav from "./MobNav";
import NavLinksDesk from "./NavLinksDesk";
import Cart from "../Cart/Cart";
import CartModal from "../Cart/CartModal";

const NavBar = ({size}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleDropdownMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className="container__wrapper">
      {/* header section */}
      <header className="header__wrapper bg-[#0E0E0E] px-10 pt-5 pb-5 border-b-[1px] border-gray-700 flex items-center justify-between font-Manrope">
        <div className="logo_menu_wrapper flex items-center justify-between tablet:gap-6 ">
          <div className="menu laptop:hidden" onClick={() => handleDropdownMenu()}>
            {openMenu ? (
              <div><MdClose className=" h-10 w-10 text-white" /><MobNav/></div>
            ) : (<div><MdMenu className=" h-10 w-10 text-white"/></div>
              
              
            )}

            {/* for mobile display when you click on the hamburger menu */}
            {/* {openMenu && <MobNav/>} */}
          </div>
          <div className="logo mobile:hidden">
            <img src={Logo} alt="audiophile-logo" />
          </div>
        </div>
        {/* just for mobile display */}
        <div className="tablet tablet:hidden">
          <div className="logo">
            <img src={Logo} alt="audiophile-logo" />
          </div>
        </div>
        {/* Nav items */}
        <NavLinksDesk/>
        {/* Cart Icon */}
        <div>
          <IoCartOutline className="cart h-6 w-6 text-white" onClick={handleShowModal}/>
          {showModal && <CartModal onClose={()=> setShowModal(false)}/>}
          
        </div>
        {/* <span className="text-white">{size}</span> */}
      </header>
    </div>
  );
};

export default NavBar;
