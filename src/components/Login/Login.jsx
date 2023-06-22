import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { logInUser, handleGoogleAuth, handleGithubAuth, setUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })

        form.reset();
    }

    const handleGoogleLogin = () => {
        handleGoogleAuth()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = () => {
        handleGithubAuth()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="pt-4 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold mb-4">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={handleGoogleLogin} className='bg-blue-600 rounded py-3 text-white'>Login With Google</button>
                        <button onClick={handleGithubLogin} className='bg-blue-600 rounded py-3 text-white'>Login With Github</button>
                        <label className="label">
                            <p>You don`t have account? <Link to="/register">Please Register</Link></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;