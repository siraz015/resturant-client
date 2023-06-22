import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import { AuthContext } from '../../provider/AuthProvider';

const ChiefDetails = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const chiefDetails = useLoaderData();

    const { name, picture, years_of_experience, number_of_recipes, like, id, description } = chiefDetails;


    useEffect(() => {
        fetch('https://assignment-10-server-siraz015.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
        setLoading(false)
    }, [])
    return (
        <div className='container'>

            <div>
                {loading ? <div className='text-center mt-36'><div className="radial-progress mx-auto" style={{ "--value": 80 }}></div></div> : <div>

                    <div className='mx-auto p-20 '>
                        <div className="card card-compact bg-base-100 shadow-xl pb-20">
                            <figure><img className='rounded-full border-4  border-orange-500' src={picture} /></figure>
                            <div className="card-body">
                                <div className='text-center'>
                                    <h1 className='text-5xl font-bold text-orange-500'>{name}</h1>
                                    <p className='px-20 py-5 text-xl'>{description} </p>
                                    <p className='text-2xl mb-2'>Years of Experience: <span className='text-orange-600 font-extrabold'> {years_of_experience}</span></p>
                                    <p className='text-2xl'>Like: <span className='text-blue-500'>{like} 👍</span></p>
                                    <p className='text-2xl mt-2'>Recipe: <span className='text-blue-500'>{number_of_recipes}</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h2 className='text-center text-4xl font-bold'>Most <span className='text-orange-700'>Popular</span> and <span className='text-orange-700'>Favourite</span> <span> Recipe </span> </h2>
                    <div className='grid md:grid-cols-3 gap-10 container py-10 px-20'>
                        {
                            recipes.map(recipe => <Recipes
                                key={recipe.id}
                                recipe={recipe}
                            ></Recipes>)
                        }
                    </div>

                </div>}


            </div>
        </div>
    );
};

export default ChiefDetails;