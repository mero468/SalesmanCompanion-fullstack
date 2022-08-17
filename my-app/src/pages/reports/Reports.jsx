import { Container,Row,Col } from 'reactstrap'
import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import "./Reports.scss"
import{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Table } from 'reactstrap';

const Reports = () => {
    const [show_new, setShow_new] = useState(false);

    const handleClose_new = () => setShow_new(false);
    const handleShow_new = () => setShow_new(true);
  
    const [show_edit, setShow_edit] = useState(false);

    const handleClose_edit = () => setShow_edit(false);
    const handleShow_edit = () => setShow_edit(true);
    return (
    <>
    <div className='Reports'>
      <Sidebar></Sidebar>
      <div className="ReportsContainer">
            <Container className= 'p-3' >
                <div class="container mt-3 mb-4">
                    <div class="col-lg-12 mt-4 ">
                    <Row>
                    <Col className="p-1 border-bottom d-md-flex " sm={12}>
                        <h3 className='col-md-8'> Reports</h3>
                        <Button classsName="col-md-2 " variant="primary" onClick={handleShow_new}> New Report</Button>
                        <Form>
                        <Form.Group className=" col-md-12 " controlId="formBasicEmail">
                            <Form.Control  className="mx-2 p-2" type="search" placeholder="Search">
                            </Form.Control>
                        </Form.Group>
                        </Form>
                        </Col>                    
                </Row>
                <Table responsive  hover>
                    <thead>
                            <tr>
                                <th >#</th>
                                <th>status and Actions</th>

                                <th>Date</th>
                                <th>Location</th>
                                <th>Customer Name</th>
                                <th>Customer Prefix</th>
                                <th>Customer Rank</th>
                                <th>Next Actions</th>
                                <th>Notes</th>
                                <th>Milling Machine</th>
                                <th>Milling Zircon</th>
                                <th >Milling and Zircon Price</th>
                                <th>Furnace Poreclain</th>
                                <th>Furnace Sintering</th>
                                <th>Furnace Press</th>
                                <th>Suction Type</th>
                                <th>Suction Price</th>
                                <th>Scanner IOR</th>
                                <th>Scanner Price</th>
                                <th>Scanner LabScanner</th>
                                <th>Investment Type</th>
                                <th>Investment Price</th>
                                <th>Investment Avg</th>
                                <th>Metal Type</th>
                                <th>Metal Price</th>
                                <th>Metal gram</th>
                                <th>Powder Type</th>
                                <th>Powder Price</th>
                                <th>Powder gram</th>
                                <th>Composite Type</th>
                                <th>Composite Price</th>
                                <th>Composite gram</th>  
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                <ul class="list-unstyled mb-0 d-flex justify-content-start">
                                    <li> <a  class="text-primary px-2" data-toggle="tooltip" title="" data-original-title="status"><i  class="fas fa-check-square"></i> </a></li>
                                    <li><a  onClick={handleShow_edit} class="text-info px-2" data-toggle="tooltip"  data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                    <li><a  class="text-danger px-2" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                    </ul>
                                </td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>  
                                    <ul class="list-unstyled mb-0 d-flex justify-content-start">
                                    <li> <a  class="text-primary px-2" data-toggle="tooltip" title="" data-original-title="status"><i  class="fas fa-check-square"></i> </a></li>
                                    <li><a  onClick={handleShow_edit} class="text-info px-2" data-toggle="tooltip"  data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                    <li><a href="#" class="text-danger px-2" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                    </ul>
                                </td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>    
                                    <ul class="list-unstyled mb-0 d-flex justify-content-start">
                                    <li> <a  class="text-primary px-2" data-toggle="tooltip" title="" data-original-title="status"><i  class="fas fa-check-square"></i> </a></li>
                                    <li><a  onClick={handleShow_edit} class="text-info px-2" data-toggle="tooltip"  data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                    <li><a href="#" class="text-danger px-2" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                                    </ul>
                                </td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>شفت كمبيوتر لمختبر العربية و وصينا عليه علشان انركب الجهاز عندهم الاسبوع القادم</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>      
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
                </Container>
      
                
                {/* New Report */}
                <Modal id="newcustomer" show={show_new} onHide={handleClose_new}>
                    <Modal.Header closeButton>
                    <Modal.Title>New Report</Modal.Title>
                    </Modal.Header>
                    <Form>
                    
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row>
                            <Col md={6}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Date </Form.Label>
                            <Form.Control type="date" placeholder="Enter Phone Number" />
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                            <Col md={4}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="select" placeholder="select Customer Name" />
                            </Form.Group>
                            </Col>
                            <Col md={4}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Customer Prefix</Form.Label>
                            <Form.Control type="select" placeholder="select Customer Prefix" />
                            </Form.Group>
                            </Col>
                            <Col md={4}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Customer Rank</Form.Label>
                            <Form.Control type="select" placeholder="select Customer Rank" />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label>Next Actions</Form.Label>
                                <Form.Control type="textarea" placeholder="Next Actions" />
                                </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control type="textarea" placeholder="Notes" />
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>                                
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Machine</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Machine" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Zircon</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Zircon Used" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Price" />
                                    </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Avg/Month</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Average" />
                                    </Form.Group>
                                    </Col>                                
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Furnace Poreclain</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Furnace Poreclain" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Furnace Sintering</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Furnace Sintering" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Furnace press</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Furnace Press" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Suction Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Suction Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Suction Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Suction Price" />
                                        </Form.Group>
                                    </Col>
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Scanner IOS</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Scanner IOS" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Scanner Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Scanner Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Lab Scanner</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Lab Scanner" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Investment Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Investment Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Investment Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Investment Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Investment Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Investment Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Metal Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Metal Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Metal Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Metal Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Metal Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Metal Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Powder Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Powder Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Powder Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Powder Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Powder Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Powder Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Composite Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Composite Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Composite Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Composite Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Composite Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Composite Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button variant="secondary" onClick={handleClose_new}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose_new}>
                        Add  Report
                    </Button>
                    </Modal.Footer>
                    </Form>

                </Modal>

                  {/* Edit Customer Modal */}
                <Modal id="editcustomer" show={show_edit} onHide={handleClose_edit}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Report</Modal.Title>
                    </Modal.Header>
                    <Form>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row>
                            <Col md={6}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Date </Form.Label>
                            <Form.Control type="date" placeholder="Enter Phone Number" />
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                            <Col md={4}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="select" placeholder="select Customer Name" />
                            </Form.Group>
                            </Col>
                            <Col md={4}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Customer Prefix</Form.Label>
                            <Form.Control type="select" placeholder="select Customer Prefix" />
                            </Form.Group>
                            </Col>
                            <Col md={4}>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Customer Rank</Form.Label>
                            <Form.Control type="select" placeholder="select Customer Rank" />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label>Next Actions</Form.Label>
                                <Form.Control type="textarea" placeholder="Next Actions" />
                                </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control type="textarea" placeholder="Notes" />
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>                                
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Machine</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Machine" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Zircon</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Zircon Used" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Price" />
                                    </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Milling Avg/Month</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Average" />
                                    </Form.Group>
                                    </Col>                                
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Furnace Poreclain</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Furnace Poreclain" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Furnace Sintering</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Furnace Sintering" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Furnace press</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Furnace Press" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Suction Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Suction Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Suction Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Suction Price" />
                                        </Form.Group>
                                    </Col>
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Scanner IOS</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Scanner IOS" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Scanner Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Scanner Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Lab Scanner</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Lab Scanner" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Investment Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Investment Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Investment Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Investment Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Investment Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Investment Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Metal Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Metal Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Metal Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Metal Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Metal Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Metal Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Powder Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Powder Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Powder Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Powder Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Powder Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Powder Avg" />
                                    </Form.Group>
                                    </Col>
                            
                            </Row>
                            <Row>                                
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Composite Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Composite Type" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Composite Price</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Composite Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Composite Avg</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Composite Avg" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button variant="secondary" onClick={handleClose_edit}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose_edit}>
                        Edit Report
                    </Button>
                    </Modal.Footer>
                    </Form>

                </Modal>
            </div>
        </div>
                
    </>
  )
}

export default Reports