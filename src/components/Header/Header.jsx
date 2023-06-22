import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto md:flex justify-between py-3'>
                <h4 className='font-semibold text-xl'>SZ Recipe House</h4>
                <nav className='flex gap-5'>
                    <ActiveLink className='text-xl font-semibold' to='/'> <p className='text-xl font-semibold'>Home</p> </ActiveLink>
                    <ActiveLink className='text-xl font-semibold' to='/blog'> <p className='text-xl font-semibold'>Blog</p> </ActiveLink>
                </nav>
                <div>
                    {
                        user ?
                            <span className='flex gap-6'>
                                <img className='w-9' style={{borderRadius: '50%'}} src={user.photoURL} alt="" />
                                <button className='font-semibold text-xl' onClick={handleLogOut}>Log Out</button>
                            </span> :
                            <Link to='/login'><button>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;