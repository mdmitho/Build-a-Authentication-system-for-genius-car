import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateLogin =()=>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister =(event)=>{
        event.preventDefault()
        // console.log(event.target.email)
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password,name)
      }
    return (
        <div className='register-form'>
            <h1 className='text-center mt-3 mb-3 text-primary'>Please register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your name' />
                <input type="email" id='' name='email' placeholder='Email Address' required/> 
                <input type="password" name='password' id='' placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input className='w-50 mx-auto btn btn-primary mt-3' type="submit" value='Register' />
            </form>
            <p>Already have an account ? <Link to="/login" className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;