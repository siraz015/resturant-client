import React from 'react';
import Banner from '../Banner/Banner';
import AllChief from '../AllChief/AllChief';
import PopularRecipe from '../PopularRecipe/PopularRecipe';
import FoodGallery from '../FoodGallery/FoodGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChief></AllChief>
            <PopularRecipe></PopularRecipe>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;