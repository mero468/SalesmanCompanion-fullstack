import React from 'react'
import "./signup.scss"
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import {useState,useHistory} from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
  
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [re_password,setRepassword] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [country,setCountry] = useState("");
  const [city,setCity] = useState("");  

  async function register(){
    // let formData = {name,password,email,re_password,phone,country,city}
    // console.warn(formData)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "email": email,
      "name": name,
      "password": password,
      "re_password": re_password,
      "country": country,
      "city":city,
      "phone": phone
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/auth/users/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }

  return (
    <>
    <div class="signup-page ">
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-5 p-0 shadow-lg offset-md-6">
                  <div class="header-cont py-1">
                      <h2 class=" text-center">Sign Up </h2>
                  </div>
                  <div class="bg-white ">
                      <div class="row">
                          <div class="col-md-12 ">
                              <div class="form-left h-100 py-2 px-4">
                                <Form onSubmit={register}  className="row g-3">
                                  <Form.Group class="col-md-12">
                                    <Form.Label for="validationDefault01" class="form-label">Name</Form.Label>
                                    <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend2"> <i class="fas fa-user    "></i></span>
                                    <Form.Control value={name} required onChange={(e)=> setName(e.target.value)} type="text" aria-describedby="inputGroupPrepend2" class="form-control" id="validationDefault01" />
                                    </div>
                                  </Form.Group>
                                  <Form.Group class="col-md-12">
                                    <Form.Label for="validationDefaultUsername" class="form-label">Email</Form.Label>
                                    <div class="input-group">
                                      <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-at fa-xs "></i></span>
                                      <Form.Control value={email}  onChange={(e)=> setEmail(e.target.value)} type="email" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                                    </div>
                                  </Form.Group>
                                  <Form.Group class="col-md-12">
                                    <Form.Label for="validationDefaultPassword" class="form-label">Password</Form.Label>
                                    <div class="input-group">
                                      <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-lock fa-sm  "></i></span>
                                      <Form.Control value={password}  onChange={(e)=> setPassword(e.target.value)} type="password" class="form-control" id="validationDefaultPassword"  aria-describedby="inputGroupPrepend2" required/>
                                    </div>
                                  </Form.Group>
                                  <Form.Group class="col-md-12">
                                    <Form.Label for="validationDefaultPassword" class="form-label">Confirm Password</Form.Label>
                                    <div class="input-group">
                                      <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-lock fa-sm  "></i></span>
                                      <Form.Control type="password" value={re_password}  onChange={(e)=> setRepassword(e.target.value)} class="form-control" id="validationDefaultPassword"  aria-describedby="inputGroupPrepend2" required/>
                                    </div>
                                  </Form.Group>
                                  <Form.Group class="col-md-12">
                                    <Form.Label for="validationDefaultPhone" class="form-label">Phone</Form.Label>
                                    <div class="input-group">
                                      <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-phone fa-xs "></i></span>
                                      <Form.Control value={phone}  onChange={(e)=> setPhone(e.target.value)} type="phone" class="form-control" id="validationDefaultPhone"  aria-describedby="inputGroupPrepend2" required/>
                                    </div>
                                  </Form.Group>
                                  <Form.Group class="col-md-6">
                                    <Form.Label for="validationDefault03" class="form-label">Country</Form.Label>
                                    <Form.Control value={country}  onChange={(e)=> setCountry(e.target.value)}type="text" class="form-control" id="validationDefault03" required/>

                                  </Form.Group>
                                  <Form.Group class="col-md-6">
                                    <Form.Label for="validationDefault04" class="form-label">City</Form.Label>
                                    <Form.Control value={city}  onChange={(e)=> setCity(e.target.value)} type="text" class="form-control" id="validationDefault03" required/>
                                  </Form.Group>
                                  <div class="col-md-6">
                                    <span class="">Already have an account? </span><Link to="/login"  style={{ textDecoration: "none" }}> Login now!</Link>
                                  </div>
                                  <div class="col-md-12">
                                    <button type="submit" class="my-2 shadow p-2 btn btn-primary offset-3  w-50 mt-4" >Sign up</button>
                                   </div>
                                </Form>
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

export default Signup