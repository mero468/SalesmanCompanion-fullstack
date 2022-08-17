import React,{useState,useHistory} from 'react'
import "./login.scss"
import Logo from './Logo.png'
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import * as types from '../../actions/types';

const Login = () => {
    const [password,setPassword] = useState("");
    const [re_password,setRepassword] = useState("");
    const [email,setEmail] = useState("");

    function authenticate(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": email,
          "password": password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/auth/jwt/create", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    // //Todo: Is the User Authenticated // Redirect to home page
    console.log()
    return (
    <>
              <div class="login-page ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 p-0 shadow-lg offset-md-8">
                        <div class="header-cont py-2">
                            <h2 class=" text-center">Login </h2>
                        </div>
                        <div class="bg-white ">
                            <div class="row">
                                <div class="col-md-7 ">
                                    <div class="form-left h-100 py-5 px-3">
                                      
                                        <form  className="row g-4">
                                            
                                                <Form.Group class="col-12">
                                                    <Form.Label>Username<span class="text-danger">*</span></Form.Label>
                                                    <Form.Group  class="input-group">
                                                        <div class="input-group-text"><i class="fas fa-user"></i></div>
                                                        <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" class="form-control" placeholder="Enter Email"/>
                                                    </Form.Group >
                                                </Form.Group >
                                                <Form.Group class="col-12">
                                                    <Form.Label>Password<span class="text-danger">*</span></Form.Label>
                                                    <Form.Group class="input-group">
                                                        <div class="input-group-text"><i class="fas fa-lock    "></i></div>
                                                        <Form.Control required type="password" value={password} 
                                                        onChange={e => setPassword(e.target.value)} name='password' minLength={6} class="form-control" placeholder="Enter Password"/>
                                                    </Form.Group>
                                                </Form.Group>
    
                                                <div class="col-sm-12">
                                                    <Link to="/forgotpass" className='float-end'  style={{ textDecoration: "none" }}> Forgot Password</Link>
                                                </div>
        
                                                <div class="col-md-10">
                                                   <span> Don't have an account?</span> <Link to="/signup"  style={{ textDecoration: "none" }}> Signup now! </Link>
                                                </div> 
                                                <div class="col-md-8">
                                                    <Button onClick={authenticate} className=" shadow p-2 px-4 float-end mt-4">login</Button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-5 ps-0 d-none d-md-block">
                                    <div class="form-right h-100 bg-secondary text-white text-center pt-5">
                                        <img class="" alt="logo" src={Logo}/>
                                        <h3 class="py-5">Welcome back!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};


export default Login;