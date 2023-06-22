import React from 'react';
import { Form } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-800'>
            <div className='grid md:grid-cols-3 gap-5 container mx-auto py-8 px-6' >
                <div>
                    <ul className='text-white text-center'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Shop</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='flex flex-col text-center'>
                    <h2 className='text-white mb-3 text-2xl'>Newsletter</h2>
                    <input className='py-1 px-4 rounded-lg text-lg mb-4' type="email" placeholder='Your Email Here' />
                    <button className='bg-red-500 py-2 rounded-lg text-white'>Submit Now</button>
                </div>
                <div className='text-center'>
                    <h2 className='text-white text-2xl mb-2'>Contact</h2>
                    <p className='text-white text-1xl'>1204, Banani, Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;