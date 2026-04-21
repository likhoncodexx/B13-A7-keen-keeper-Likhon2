import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {



    const link = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded font-bold transition-all ${isActive ? "bg-[#244d3f] text-white" : "text-gray-800 hover:text-green-800"}`
                }>
                    <FaHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded font-semibold transition-all ${isActive ? "bg-[#244d3f] text-white" : "text-gray-800 hover:text-green-800"}`
        }>
          <RiTimeLine /> Timeline
        </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded font-semibold transition-all ${isActive ? "bg-[#244d3f] text-white" : "text-gray-800 hover:text-green-800"}`
        }>
          <ImStatsDots /> Stats
        </NavLink>
            </li>
        </>
    );

    return (
        <nav className="flex justify-between items-center max-w-[1227px] mx-auto mt-5 p-3 relative">


            <div>
                <h1 className="text-xl font-bold cursor-pointer">
                    <span className="font-black text-[#003b5c]">Keen</span><span className='text-green-600'>Keeper</span>
                </h1>
            </div>


            <div className="hidden md:flex">
                <ul className='flex gap-6 items-center'>
                    {link}
                </ul>
            </div>


            <div className="md:hidden">
                <button onClick={() => setOpen(!open)} className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                    <BsThreeDots className='text-xl' />
                </button>
            </div>


            {open && (
                <div className="absolute right-3 top-16 bg-white shadow-xl border border-gray-100 p-5 rounded-lg z-50 md:hidden min-w-[200px]">
                    <ul className='flex flex-col gap-4'>
                        {link}
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;