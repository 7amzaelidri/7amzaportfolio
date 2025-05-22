'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();



    const openMenu = () => {
        // sideMenuRef.current.style.transform = 'translateX(-16rem)';
        sideMenuRef.current.classList.add('transform-minus-16')
        sideMenuRef.current.classList.remove('transform-plus-16')
    }
    const closeMenu = () => {
        // sideMenuRef.current.style.transform = 'translateX(16rem)';
        sideMenuRef.current.classList.add('transform-plus-16')
        sideMenuRef.current.classList.remove('transform-minus-16')
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);  
            } else {
                setIsScroll(false);
            }
        })
    }, [])

    return (
        <div>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='header-bg-color' className='w-full'></Image>
            </div>



            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-md" : ""}`}>
                <a href="#top" >
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo'></Image>
                </a>



                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>



                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} className='w-6 cursor-pointer ' alt='moon icon'></Image>
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
                py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-100'>Contact <Image src={assets.arrow_icon} className='w-3' alt='arrow icon'></Image></a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} className='w-6 cursor-pointer ' alt='moon icon'></Image>
                    </button>
                </div>



                {/*  ----- mobile menu --------  */}
                <ul className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500' ref={sideMenuRef}>

                    {/* close btn */}
                    <div className='absolute top-5 right-5' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer'></Image>
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar