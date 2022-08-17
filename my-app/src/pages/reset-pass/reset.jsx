import React, { useState } from 'react';
import "./reset.scss";
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import Logo from './Logo.png';
import {Link} from 'react-router-dom';

const Reset = () => {
    const[email,setEmail] = useState("")

    function resetpass(){

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": email
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/auth/users/reset_password/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }


console.log('a7a')
  return (
        <>
          <div className="forgot-page ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 p-0 shadow-lg offset-md-7">
                        <div className="header-cont py-2">
                            <h2 className=" text-center">Forgot password </h2>

                        </div>
                        <div className="bg-white ">
                            <div className="row">
                                <div className="col-md-7 ">
                                    <div className="form-left h-100 py-5 px-3">
                                        <form action="" className="row g-3">
                                                <div class="col-md-12">
                                                    <p>Enter the email address asociated with your account and we will send you a link to reset
                                                        your account's password
                                                    </p>
                                                </div>
                                                <Form.Group class="col-md-12">
                                                    <Form.Label>Email<span class="text-danger">*</span></Form.Label>
                                                    <div class="input-group">
                                                        <div class="input-group-text"><i class="fas fa-at fa-xs  "></i></div>
                                                        <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" placeholder="Enter your Email"/>
                                                    </div>
                                                </Form.Group>
                                                <div class="col-sm-12">

                                                </div>

                                                <div class="col-md-12 text-center">
                                                   <span> Don't have an account?</span> <Link to="/signup"  style={{ textDecoration: "none" }}> Signup now! </Link>
                                                </div>
                                                <div class="col-md-12">
                                                    <button onClick={resetpass} className=" shadow p-2 w-100 btn btn-primary px-4 float-end mt-4">continue</button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-5 ps-0 d-none d-md-block">
                                    <div class="form-right h-100 bg-secondary text-white text-center pt-5">
                                        <img alt='logo' src={Logo}/>
                                        <h3 class="py-5">Reset Your Password!</h3>
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
}

export default Reset