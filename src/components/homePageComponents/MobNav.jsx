import React from 'react';
import { MdHome, MdHeadphones, MdSpeaker } from "react-icons/md";
import { BsEarbuds } from "react-icons/bs";
import {Link} from 'react-router-dom';

const MobNav = () => {
  return (
    <div>
      <nav className="list-items absolute text-white top-[81px] left-0 h-[20em] bg-[#0E0E0E] w-full font-light">
                <ul className=" w-full flex flex-col items-center text-2xl gap-8 py-10 tablet:items-start tablet:pl-10">
                  <Link to="/Home" className=" flex items-center gap-5">
                    <span className="mobile:hidden">
                      <MdHome className="w-8 h-8" />
                    </span>
                    HOME
                  </Link>
                  <Link to="/Headphones" className=" flex items-center gap-5">
                    <span className="mobile:hidden">
                      <MdHeadphones className="w-8 h-8" />
                    </span>
                    HEADPHONES
                  </Link>
                  <Link to="/Speakers" className=" flex items-center gap-5">
                    <span className="mobile:hidden">
                      <MdSpeaker className="w-8 h-8" />
                    </span>
                    SPEAKERS
                  </Link>
                  <Link to="/Earphones" className=" flex items-center gap-5">
                    <span className="mobile:hidden">
                      <BsEarbuds className="w-8 h-8" />
                    </span>
                    EARPHONES
                  </Link>
                </ul>
        </nav>
    </div>
  )
}

export default MobNav
