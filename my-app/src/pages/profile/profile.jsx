import { Container,Row,Col } from 'reactstrap'
import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import "./profile.scss"
import profilpic from "./profile.jpg"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Profile = () => {
  return (
    <div className='Profile'>
      <Sidebar></Sidebar>
      <div className="ProfileContainer">
            <Container className= 'p-5' >
                <Row>
                    <Col className="p-1 border-bottom d-md-flex" sm={12}>
                        <h3 className='col-lg-11'> Personal Information</h3>
                        <button className='pl-2 ml-2 col-xs-1 btn btn-primary w-100 '> Edit </button>
                    </Col>
                    <img class="mt-2 col-lg-4 rounded-circle img-fluid profilepic" alt='profile pic' src={profilpic}/>
                    <Col className='fields-container mt-2' md={8}>
                        <FloatingLabel controlId="floatingInput" label="First Name "className="mb-3">
                            <Form.Control type="email" placeholder="Ammar" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name "className="mb-3">
                            <Form.Control type="email" placeholder="Atoum" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Phone "className="mb-3">
                            <Form.Control type="phone" placeholder="+90 5524887540" />
                        </FloatingLabel>
                        <Row >
                        <FloatingLabel controlId="floatingInput" label="Country "className="mb-3 col-sm-6 mt--2">
                            <Form.Control type="text" placeholder="Country" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="City "className="mb-3 col-md-6">
                            <Form.Control type="text" placeholder="Amman" />
                        </FloatingLabel>
                        </Row>

                        <FloatingLabel controlId="floatingInput" label="Email "className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>  
                        
                        <FloatingLabel controlId="floatingInput" label="password "className="mb-3">
                            <Form.Control type="password" placeholder="password" />
                        </FloatingLabel>                                                     
                    </Col>                    
                </Row>
            </Container>

      </div>
    </div>
  )
}

export default Profile