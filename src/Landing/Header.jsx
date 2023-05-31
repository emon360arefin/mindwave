import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Shared/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

    let [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Blog', path: '/blog' },
        { id: 4, name: 'Gallery', path: '/gallery' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    const activeClass = 'select-none ml-0 md:mr-6 text-xl text-left my-2 border-0 md:border-b-2 border-[#2895FF] px-2 pb-1  text-[#2895FF]'
    const inactiveClass = 'select-none ml-0 md:mr-6 text-xl text-left my-2  border-0 md:border-b-2 border-transparent  px-2 pb-1 py-px '

    let [open, setOpen] = useState(true)

    return (
        <div className={`${scroll ? 'bg-slate-100 ' : ' bg-gradient-to-b from-slate-200 to-[#f1f5f9b2] backdrop-blur-lg'}  header z-[15] sticky top-0 -mb-24`}>
            <div className={`max-w-7xl mx-auto flex transition-all duration-500 ease-in-out ${scroll ? 'h-auto md:h-[70px]' : 'h-auto md:h-24'}`}>
                <div className='w-full md:w-2/12 bg-slate-100 md:bg-transparent  py-4 flex z-20'>
                    <Link className='  px-4 flex items-center ' to='/'> <img className='w-1/3 md:w-full' src="/logo.png" alt="" /></Link>
                    <div onClick={() => setOpen(!open)} className='md:hidden mr-4 text-2xl text-[#1E90FF] flex items-center cursor-pointer'>
                        {open ? <RxHamburgerMenu /> : <RxCross2 />}
                    </div>
                </div>
                <ul className={`w-full md:w-10/12 backdrop-blur-sm md:backdrop-blur-0 opacity-[95%]  text-right absolute md:static bg-white  md:bg-transparent  flex md:flex-row flex-col md:items-center justify-end z-10 gap-2 px-4 py-4 transition-all duration-500 ease-in-out ${open ? 'top-[-450px]' : 'top-12'}`}>


                    {
                        items.map(item => <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? activeClass : inactiveClass} key={item.id} to={item.path}> {item.name}</NavLink>)
                    }

                    <Button >
                        Getting Started
                    </Button>

                </ul>
            </div>

        </div>
    );
};

export default Header;