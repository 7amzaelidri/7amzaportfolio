import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20 text-gray-500'>
            <div className='text-center'>
                <Image src={assets.logo} alt="Logo" className='w-36 mx-auto mb-2' />

                <div className='flex items-center gap-2 mx-auto w-max text-center'>
                    <Image src={assets.mail_icon} alt="Mail Icon" className='w-6' />
                    <p>example@example.com</p>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 ">
                <p>&copy; 2025 Thomas Horvath. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
                    <li><a target='_blank' href="#" className='hover:text-gray-700'>Github</a></li>
                    <li><a target='_blank' href="#" className='hover:text-gray-700'>Instagram</a></li>
                    <li><a target='_blank' href="#" className='hover:text-gray-700'>LinkedIn</a></li>
                </ul>
            </div>


        </div>

    )
}

export default Footer