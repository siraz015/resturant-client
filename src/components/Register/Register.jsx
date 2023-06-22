import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser, handleGoogleAuth, handleGithubAuth, setUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                updateUserData(result.user, name, photoUrl)
                console.log(registeredUser);
                setUser(registeredUser)
            })
            .catch(error => {
                console.log(error);
            })
        form.reset();
    }

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                console.log('user data updated');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        handleGoogleAuth()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithuLogin = () => {
        handleGithubAuth()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="pt-4 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold mb-4">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Photo URL</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <button onClick={handleGoogleLogin} className='bg-blue-600 rounded py-3 text-white'>Register With Google</button>
                        <button onClick={handleGithuLogin} className='bg-blue-600 rounded py-3 text-white'>Register With Github</button>
                        <label className="label">
                            <p>You have already account? <Link to="/login">Please Login</Link></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;