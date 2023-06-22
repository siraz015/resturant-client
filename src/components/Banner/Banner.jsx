import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-full h-screen' src="https://i.ibb.co/bW3WCgB/2.jpg" alt="" />
            <div className='container mx-auto'>
                <div className='md:absolute top-0 w-1/2 mt-44'>
                    <h3 className='text-white text-5xl mb-8 font-semibold leading-normal custom-color'>Siraz Dines Kacchi Recipes <br /> Siraz Kacchi Recipes</h3>
                    <p className='custom-color text-white'>The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie. As the outer layers of the meat cooks, it’s shaved off and served in a pita or other flatbread with vegetables and sauce.</p>
                    <button className='bg-white mt-5 rounded px-4 py-2 font-semibold'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;