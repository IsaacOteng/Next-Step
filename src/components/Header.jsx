import React, { useState, useRef, useEffect } from 'react'
import '/src/index.css'
import { Search, BookOpen, BadgeDollarSign, CalendarDays, Hammer, Users, FileText } from 'lucide-react'

const Header = () => {
    const dropdownmenu = useRef(null);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const menu = menuRef.current;
        if(!menu || !button) return;

        const showMenu = () => menu.classList.remove('hidden');
        const hideMenu = () => menu.classList.add('hidden');

        button.addEventListener('mouseenter', showMenu);
        button.addEventListener('mouseleave', hideMenu);
        menu.addEventListener('mouseenter', showMenu);
        menu.addEventListener('mouseleave', hideMenu);

        return () => {
            button.removeEventListener('mouseenter', showMenu);
            button.removeEventListener('mouseleave', hideMenu);
            menu.removeEventListener('mouseenter', showMenu);
            menu.removeEventListener('mouseleave', hideMenu);
        };
    }, []);

    return (
        <>
    <div className='Header w-full flex flex-col md:flex-row flex-wrap items-center'>
            <div className='header w-full flex flex-col md:flex-row flex-wrap items-center md:items-center px-2 pt-2'>
            <img src="/src/assets/unstop-logo.png" className='unstop-logo w-20 h-13/2 mt-1 ml-3 mr-1'  alt="unstop-Logo" />
                    <div className="search relative mt-1">
                        <Search className='absolute left-4 top-4 -translate-y-1/2 h-5 w-5 text-gray-500'/>
                        <input 
                            type="text"  
                            placeholder='Search Opportunities'
                            className=' w-53 mx-2 h-8 text-xs px-3 py-2 pl-10 border border-black rounded-2xl  focus:outline-none'/>
                    </div>
                                
            {/* Adding a navigation bar*/}
            
            <nav className='navbar relative flex flex-wrap h-8 w-full md:w-auto ml-7 md:mt-0 justify-start md:justify-normal items-center'>

                <a href="#" className='px-2 p-2 mx-1 border border-transparent hover:border hover:rounded-2xl hover:bg-gray-100 '>Internships</a>
                <a href="#" className='px-2 p-2 mx-1 border border-transparent hover:border hover:rounded-2xl hover:bg-gray-100'>Jobs</a>
                <a href="#" className='px-2 p-2 mx-1 border border-transparent hover:border hover:rounded-2xl hover:bg-gray-100'>Competitions</a>
                <a href="#" className='px-2 p-2 mx-1 border border-transparent hover:border hover:rounded-2xl hover:bg-gray-100'>Mentorships</a>
                <a href="#" className='px-2 p-2 mx-1 border border-transparent hover:border hover:rounded-2xl hover:bg-gray-100'>Practice</a>
            {/* Dropdown Menu for More */}
                <div ref={dropdownmenu} className='relative inline-flex'>
                    <button ref={buttonRef} className='px-2 p-1 mx-1 border border-transparent hover:border hover:rounded-2xl hover:bg-gray-100 flex items-center gap-1 hover:transition-all hover:duration-700 hover:ease-in-out'>
                        More <span className="-ml-1 rotate-180">^</span>
                    </button> 
                    <ul ref={menuRef} className='hidden absolute top-8 -left-35 min-w-[200px] bg-white border border-gray-200 rounded-2xl shadow-2xl z-10 py-2'>
                        <li className='flex items-center ml-2 mr-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'><BookOpen className='mr-3 h-4 w-4' /> Courses</li>
                        <li className='flex items-center ml-2 mr-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'><BadgeDollarSign className='mr-3 h-4 w-4' /> Scholarships</li>
                        <li className='flex items-center ml-2 mr-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'><CalendarDays className='mr-3 h-4 w-4' /> Cultural Events</li>
                        <li className='flex items-center ml-2 mr-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'><Hammer className='mr-3 h-4 w-4' /> Workshops</li>
                        <li className='flex items-center ml-2 mr-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'><Users className='mr-3 h-4 w-4' /> Conferences</li>
                        <li className='flex items-center ml-2 mr-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'><FileText className='mr-3 h-4 w-4' /> Blog</li>
                    </ul>
                </div>
            </nav> 

            <div className='flex items-center gap-2 mt-2 md:mt-0 ml-7'>
                <span className='w-0.5 h-10 bg-black opacity-5'></span>
                <button className='flex w-20 h-10 justify-center px-4 py-2 bg-white border text-black rounded-3xl hover:bg-gray-100 hover:border-blue-500 hover:text-blue-500'>Host</button>
                <button className='flex w-30 justify-center px-4 py-2 bg-amber-100 border border-amber-400 text-black rounded-3xl hover:bg-amber-200 hover:border-amber-500'>Business</button>     
                <span className='w-0.5 h-10 bg-black opacity-5'></span>
                <button className='flex w-20 justify-center px-4 py-2 bg-blue-500 border text-white rounded-3xl hover:bg-blue-700 transition-colors duration-300'>Login</button>
            </div>
        </div>
        <hr className=' mt-3 w-full bg-black opacity-50' />
    </div>
</>
);
};

export default Header