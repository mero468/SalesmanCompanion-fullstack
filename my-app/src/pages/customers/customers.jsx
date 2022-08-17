import { Container,Row,Col } from 'reactstrap'
import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import "./customers.scss"
import{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Customers = () => {
    const [show_new, setShow_new] = useState(false);

    const handleClose_new = () => setShow_new(false);
    const handleShow_new = () => setShow_new(true);
  
    const [show_edit, setShow_edit] = useState(false);

    const handleClose_edit = () => setShow_edit(false);
    const handleShow_edit = () => setShow_edit(true);
    return (
    <>
    <div className='Customers'>
      <Sidebar></Sidebar>
      <div className="CustomersContainer">
            <Container className= 'p-5' >
                <Row>
                    <Col className="p-1 border-bottom d-md-flex " sm={12}>
                        <h3 className='col-md-8'> Customers</h3>
                        <Button classsName="col-md-2 " variant="primary" onClick={handleShow_new}> New Customer</Button>
                        <Form.Group className=" col-md-2 " controlId="formBasicEmail">
                            <Form.Control  className="mx-2 p-2" type="search" placeholder="Search">
                            </Form.Control>
                        </Form.Group>
                        </Col>

                </Row>
                <div class="container mt-3 mb-4">
                    <div class="col-lg-12 mt-4 ">
                        <div class="row">
                        <div class="col-md-12">
                            <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                            <table class="table manage-candidates-top mb-0">
                                <thead>
                                <tr>
                                    <th>Customer Details</th>
                                    <th class="action text-right">Rank</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="candidates-list">
                                    <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                        <div class="candidate-list-title">
                                            <h5 class="mb-0"><a href="#">Brooke Kelly</a></h5>
                                        </div>
                                        <div class="candidate-list-option">
                                            <ul class="list-unstyled">
                                            <li><i class="fa fa-phone" aria-hidden="true"></i> 548979785</li>
                                            <li><i class="fas fa-map-marker-alt pr-1"></i>Rolling Meadows, IL 60008</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-left">
                                    <span className=''> A</span>

                                    </td>
                                    <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><a onClick={handleShow_edit} class="text-info" data-toggle="tooltip"  data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr class="candidates-list">
                                    <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                        <div class="candidate-list-title">
                                            <h5 class="mb-0"><a href="#">Ronald Bradley</a></h5>
                                        </div>
                                        <div class="candidate-list-option">
                                            <ul class="list-unstyled">
                                            <li><i class="fa fa-phone" aria-hidden="true"></i> 548979785</li>
                                            <li><i class="fas fa-map-marker-alt pr-1"></i>Monroe Township, NJ 08831</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-left">
                                    <span> A</span>
                                    </td>
                                    <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><a onClick={handleShow_edit} class="text-info" data-toggle="tooltip"  data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                   </ul>
                                    </td>
                                </tr>
                                <tr class="candidates-list">
                                    <td class="title">
                                    <div class="thumb">
                                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                    </div>
                                    <div class="candidate-list-details">
                                        <div class="candidate-list-info">
                                        <div class="candidate-list-title">
                                            <h5 class="mb-0"><a href="#">Vickie Meyer</a></h5>
                                        </div>
                                        <div class="candidate-list-option">
                                            <ul class="list-unstyled">
                                            <li><i class="fa fa-phone" aria-hidden="true"></i> 548979785</li>
                                            <li><i class="fas fa-map-marker-alt pr-1"></i>Minneapolis, MN 55406</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-left">
                                        <span> A</span>
                                    </td>
                                    <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><a onClick={handleShow_edit} class="text-info" data-toggle="tooltip"  data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                        <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                   </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="text-center mt-3 mt-sm-3">
                                <ul class="pagination justify-content-center mb-0">
                                <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
                                <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                <li class="page-item"><a class="page-link" href="#">25</a></li>
                                <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </Container>

      </div>
    </div>

    {/* new Customer Modal */}
      <Modal id="newcustomer" show={show_new} onHide={handleClose_new}>
        <Modal.Header closeButton>
          <Modal.Title>New Customer</Modal.Title>
        </Modal.Header>
        <Form>
        
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" />
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose_new}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose_new}>
            Add customer
          </Button>
        </Modal.Footer>
        </Form>

      </Modal>

    {/* Edit Customer Modal */}
      <Modal id="editcustomer" show={show_edit} onHide={handleClose_edit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Mohammed abdo" />
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Amman, Jordan" />
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="+90 5524887540" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose_edit}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose_edit}>
            Edit customer
          </Button>
        </Modal.Footer>
        </Form>

      </Modal>
    </>
  )
}

export default Customers