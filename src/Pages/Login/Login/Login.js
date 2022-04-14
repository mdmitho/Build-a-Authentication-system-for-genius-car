import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () =>{ 
    const emailRef= useRef('') 
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location =useLocation()
    let from = location.state?.from?.pathname || "/"

    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

if(user){
  navigate(from, {replace:true})
}
if (error) {

  errorElement =  <div>
      <p className="text-danger">Error: {error?.message}</p>
    </div>

}
const handleSubmit = event =>{
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    // console.log(email, password);
    signInWithEmailAndPassword(email, password)
}
const navigateRegister = (event) =>{
    Navigate('/register')
}


  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center">Please login</h1>
      <div className="mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {errorElement}
        <p>New to Genius Car ? <Link to="/register" className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
