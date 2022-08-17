import React from 'react'
import "./resetconf.scss"
import Form from 'react-bootstrap/Form';
import Logo from './Logo.png'
import Button from 'react-bootstrap/Button';

const ResetConfirm = () => {
    console.log("balls")
    return (
        <>
          <div className="reset-page " >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0 shadow-lg offset-md-8">
                        <div className="header-cont py-2">
                            <h2 className=" text-center">Reset your Password</h2>

                        </div>
                        <div className="bg-white ">
                            <div className="row">
                                <div className="col-md-7 ">
                                    <div className="form-left h-100 py-5 px-3">
                                        <Form action="" className="row g-3">
                                                <div class="col-md-12">
                                                    <p>Enter a new password made up of minimum 6 characters
                                                    </p>
                                                </div>
                                                <Form.Group class="col-md-12">
                                                    <Form.Label>New Password<span class="text-danger">*</span></Form.Label>
                                                    <div class="input-group">
                                                        <div class="input-group-text"><i class="fas fa-lock    "></i></div>
                                                        <Form.Control type="password" class="form-control" placeholder="Enter your New Password"/>
                                                    </div>
                                                </Form.Group>
                                                <Form.Group class="col-md-12">
                                                    <Form.Label>Confirm new Password<span class="text-danger">*</span></Form.Label>
                                                    <div class="input-group">
                                                        <div class="input-group-text"><i class="fas fa-lock    "></i></div>
                                                        <Form.Control type="password" class="form-control" placeholder="Confirm your New Password"/>
                                                    </div>
                                                </Form.Group>
                                                <div class="col-sm-12">

                                                </div>
                                                <div class="col-md-12">
                                                    <Button type="submit" className=" shadow p-2 w-100 btn btn-primary px-4 float-end mt-4">Submit</Button>
                                                </div>
                                        </Form>
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

export default ResetConfirm