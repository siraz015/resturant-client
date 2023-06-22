import React, { useEffect, useState } from 'react';
import Chief from '../Chief/Chief';

const AllChief = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-siraz015.vercel.app/allchief')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div className='chefContainer container p-10 md:grid grid-cols-3'>
            {
                chefs.map(chief => <Chief
                    key={chief.id}
                    chief={chief}
                    ></Chief>)
            }
        </div>
    );
};

export default AllChief;

