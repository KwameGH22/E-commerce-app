import React from 'react';
import { Link } from 'react-router-dom';

const NavLinksDesk = () => {
  return (
    <div>
       <nav className="list-items text-white mobile:hidden tablet:hidden laptop:contents">
          <ul className=" flex gap-4 cursor-pointer">
            <Link to="/Home" className="hover:text-[#D87D4A]">
              HOME
            </Link>
            <Link to="/Headphones" className="hover:text-[#D87D4A]">
              HEADPHONES
            </Link>
            <Link to="/Speakers" className="hover:text-[#D87D4A]">
              SPEAKERS
            </Link>
            <Link to="/Earphones" className="hover:text-[#D87D4A]">
              EARPHONES
            </Link>
          </ul>
        </nav>
    </div>
  )
}

export default NavLinksDesk
