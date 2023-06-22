import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-3/6 mx-auto' src={'https://i.ibb.co/fGnyDgB/Untitled-1.png'} alt="" />
            <Link to="/"><button className='bg-red-500 py-2 px-5 rounded text-white'>Back to Home</button></Link>
        </div>
    );
};

export default PageNotFound;