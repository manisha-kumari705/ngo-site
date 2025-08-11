import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center sticky top-0 bg-white shadow-md z-50">
        
        {/* Logo */}
        <div className="ml-5 p-5 lg:text-[30px] text-[42px] font-bold font-serif">
          <h1>
            <span className="text-orange-500">Ho</span>
            <span className="text-gray-800 italic">pens</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="py-8 flex gap-4 mr-12 font-medium">
            <li className="hover:text-[rgb(233,102,14)]"><Link to="/">Home</Link></li>
            <li className="hover:text-[rgb(233,102,14)]"><Link to="/about">About</Link></li>
            <li className="hover:text-[rgb(233,102,14)]"><Link to="/Volunteer">VolunteerForm</Link></li>
          </ul>
        </div>



        {/* Mobile Menu (Slide In) */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
            click ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
            <div className='flex justify-end p-4'>
                <button onClick={()=>setClick(false)} className='text-3xl'>&#10005;</button>
            </div>



          <ul className="p-8 space-y-6 font-medium">
            <li className="hover:text-[rgb(233,102,14)]"><Link to="/" onClick={() => setClick(false)}>Home</Link></li>
            <li className="hover:text-[rgb(233,102,14)]"><Link to="/about" onClick={() => setClick(false)}>About</Link></li>
            <li className="hover:text-[rgb(233,102,14)]"><Link to="/Volunteer" onClick={() => setClick(false)}>VolunteerForm</Link></li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="py-6 mr-12 lg:hidden text-[35px] cursor-pointer">
          <span onClick={() => setClick(!click)}>
            {click ? <span>&#10005;</span> : <span>&#9776;</span>}
          </span>
        </div>

      </div>
    </>
  );
}