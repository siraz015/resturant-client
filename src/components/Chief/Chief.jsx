import React from 'react';
import { Link } from 'react-router-dom';

const Chief = ({ chief }) => {
    const { name, picture, years_of_experience, number_of_recipes, like, id } = chief;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure><img className='h-60' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Experience: {years_of_experience} Year</p>
                    <p>Number Of Recipes: {number_of_recipes}</p>
                    <p>Like: 👍 {like}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/allchief/${id}`}><button className="btn btn-warning">View Recipe</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chief;