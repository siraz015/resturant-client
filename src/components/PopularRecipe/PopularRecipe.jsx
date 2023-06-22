import React from 'react';
import './PopularRecipe.css'

const PopularRecipe = () => {
    return (
        <div>
            <h2 className='text-center responsive md:text-4xl font-bold mb-7'>Our Most Popular Recipies 2023</h2>
            <div className='grid md:grid-cols-2 gap-5 my-5 mx-10 '>
            <div className='text-center'>
                <img className='h-96 max-w-full' src={'https://i.ibb.co/x3790n2/20211118-0222-Healthyish0187.webp'} alt="" />
            </div>
            <div className='md:mt-40'>
                <h2 className='text-3xl font-bold mb-5'>Sticky and Spicy Baked Cauliflower</h2>
                <p>Battering and oven-baking large cauliflower florets gives them a slightly crackly, just-rich-enough exterior that’s ideal for coating in a sticky-sweet gochujang glaze.</p>
                <button>View More</button>
            </div>
        </div>
        </div>
    );
};

export default PopularRecipe;