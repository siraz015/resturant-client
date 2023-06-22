import React from 'react';
import './FoodGallery.css'

const FoodGallery = () => {
    return (
        <div className='container mx-10 my-5'>
            <h2 className='text-center text-4xl font-bold mb-5'>Foot Gallery</h2>
            <div className='md:grid grid-cols-3 gap-5'>
                <img className='image-g h-56 ' src="https://i.ibb.co/wgwJV25/1.jpg" alt="" />
                <img className='image-g h-56 ' src="https://i.ibb.co/yQtN5YZ/2.jpg" alt="" />
                <img className='image-g h-56 ' src="https://i.ibb.co/LRYp927/3.jpg" alt="" />
                <img className='image-g h-56 ' src="https://i.ibb.co/BjZRTG8/4.jpg" alt="" />
                <img className='image-g h-56 ' src="https://i.ibb.co/cJqcTD2/5.jpg" alt="" />
                <img className='image-g h-56 ' src="https://i.ibb.co/g4XRz4k/6.jpg" alt="" />
            </div>
        </div>
    );
};

export default FoodGallery;