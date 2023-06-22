import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { recipeName, image, ingredients, cookingMethod, rating } = recipe;

    const notify = () => toast("Wow so easy!");

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('Added To Favorite ❤️')
    };


    return (
        <div className='shadow-lg p-5'>
            <img className='w-56 h-44 mb-4' src={image} alt="" />
            <h2 className='text-2xl font-semibold mb-2'>{recipeName}</h2>
            <ul>
                <h3 className='font-semibold text-xl'>Ingredients</h3>
                <div className='ms-3'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </div>
            </ul>
            <p className='my-2'><span className='font-semibold'>Cooking Method</span>: {cookingMethod.slice(0, 200)}... See More</p>
            <p className='font-medium'>Ratings: {rating}</p>
            <button onClick={handleFavoriteClick} disabled={isFavorite} className='bg-cyan-500 px-7 rounded py-1 font-semibold text-white mt-3'>{isFavorite? 'Favorite' : 'add to Favorite'} </button>
            <ToastContainer />
        </div>
    );
};

export default Recipes;