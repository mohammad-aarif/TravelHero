import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const history = useHistory();
    const location = useLocation();
    // firebaseAppInit()
    const url = location.state?.from || '/home'
    const {googleLogin, setUser, user} = useAuth();
    const handleGoogleAuth = () => {
        googleLogin()
        .then(res => {
            setUser(res.user)
            history.push(url)
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <h2 className="text-center"><b>Travel</b>Hero</h2>
            <div className="login-area p-5 border w-50 text-center mx-auto my-5 border-2">
                <h3>Register With</h3>
                <button onClick={handleGoogleAuth} className="btn my-3 px-5 btn-outline-primary rounded-pill"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" width="25px"  alt="" />Continue with Google</button>
                <p>Already Have an account? <Link to='/login'> Login </Link></p>
            </div>
        </div>
    );
};

export default Register;