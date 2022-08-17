import React from 'react'
import "./activate.scss"
import Form from 'react-bootstrap/Form';
import Logo from './Logo.png'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

const Activate = () => {

    const { uid,token } = useParams()

    function Verify(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "uid": "MQ",
          "token": "ba9bjw-059529e33061ed892850bd485f3e589b"
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/auth/users/activation/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    console.log(window.location.href)
    let x = window.location.href ;
    let redirect = () => {
        window.location.href = 'http://localhost:3000/activate/:uid/:token';
        // maybe can add spinner while loading
        return null;
      }
    if(x.includes("8000")){
        redirect();
        }
  return (
        <>
          <div className="activate-page ">
            <div className="container-fluid">
                <div className="row offset-sm-5">
                    <div className="col-sm-12 p-0 shadow-lg ">
                        <div className="header-cont py-2">
                            <h2 className=" text-center">Activate your Account</h2>

                                     
                        </div>
                        <div className="bg-white ">
                            <div className="row">
                                <div className="col-md-7 ">
                                    <div className="form-left h-100 py-5 px-3">
                                        <div action="" className="row g-3">
                                                <div class="col-sm-12">
                                                    <h5>
                                                        We will send an email to your email to activate your account.
                                                    </h5>
                                                </div>
                                                <div class="col-md-12 justify-content-center text-center">
                                                    <Button onClick={Verify} className="  shadow p-2 w-50 btn btn-primary mx-auto mt-4"> Activate</Button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 ps-0 d-none d-md-block">
                                    <div class="form-right h-100 bg-secondary text-white text-center pt-5">
                                        <img alt='logo' src={Logo}/>
                                        <h3 class="py-5">Activate your account!</h3>
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

export default Activate