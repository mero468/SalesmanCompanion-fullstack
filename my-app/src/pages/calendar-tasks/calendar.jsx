import React, { Component,useState } from 'react'
import MyCalendar from '../../components/calendar/calendar'
import Sidebar from '../../components/sidebar/sidebar'
import './calendar.scss'
import { Container,Row,Col } from 'reactstrap'
import Tasks from "./tasks.jpg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Calendars = () => {

  const [show_new, setShow_new] = useState(false);

  const handleClose_new = () => setShow_new(false);
  const handleShow_new = () => setShow_new(true);

  const [show_edit, setShow_edit] = useState(false);

  const handleClose_edit = () => setShow_edit(false);
  const handleShow_edit = () => setShow_edit(true);
  return (
      <>
        <div className='Calendar '>
          <Sidebar/>

          <div className='CalendarContainer py-5'>

            <Container className='p-5'>
                <Row>
                    <Col md={10} className="offset-3 pb-5">
                    <MyCalendar ></MyCalendar>

                    </Col>

                </Row>
              <Row>
                    <Col className="p-1 border-bottom d-md-flex " sm={12}>
                        <h3 className='col-md-8'> Tasks of the day</h3>
                        <Button classsName="col-md-2 " variant="primary" onClick={handleShow_new}> New Task</Button>
                        <Form.Group className=" col-md-2 " controlId="formBasicEmail">
                            <Form.Control  className="mx-2 p-2" type="search" placeholder="Search">
                            </Form.Control>
                        </Form.Group>
                        </Col>

                </Row>
                <div className="container mt-3 mb-4">
                    <div className="col-lg-12 mt-4 ">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                            <table className="table manage-candidates-top mb-0">
                                <thead>
                                <tr>
                                    <th>Customer To visit</th>
                                    <th className="action text-right">Rank</th>
                                    <th className="action text-right">Notes</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr className="candidates-list">
                                    <td className="title">
                                    <div className="thumb">
                                        <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                        <div className="candidate-list-title">
                                            <h5 className="mb-0"><a href="#">Brooke Kelly</a></h5>
                                        </div>
                                        <div className="candidate-list-option">
                                            <ul className="list-unstyled">
                                            <li><i className="fa fa-phone" aria-hidden="true"></i> 548979785</li>
                                            <li><i className="fas fa-map-marker-alt pr-1"></i>Rolling Meadows, IL 60008</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td className="candidate-list-favourite-time text-left">
                                    <span className=''> A</span>

                                    </td>
                                    <td className="candidate-list-favourite-time text-left">
                                    <span className=''>  Gotta blow this guy up </span>
                                      
                                    </td>
                                    <td>
                                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><a onClick={handleShow_edit} className="text-info" data-toggle="tooltip"  data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                                        <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr className="candidates-list">
                                    <td className="title">
                                    <div className="thumb">
                                        <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                        <div className="candidate-list-title">
                                            <h5 className="mb-0"><a href="#">Ronald Bradley</a></h5>
                                        </div>
                                        <div className="candidate-list-option">
                                            <ul class="list-unstyled">
                                            <li><i className="fa fa-phone" aria-hidden="true"></i> 548979785</li>
                                            <li><i className="fas fa-map-marker-alt pr-1"></i>Monroe Township, NJ 08831</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td className="candidate-list-favourite-time text-left">
                                    <span> A</span>
                                    </td>
                                    <td className="candidate-list-favourite-time text-left">
                                    <span className=''>  Gotta blow this guy up </span>
                                      
                                    </td>
                                    <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><a onClick={handleShow_edit} className="text-info" data-toggle="tooltip"  data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                                        <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                                   </ul>
                                    </td>
                                </tr>
                                <tr className="candidates-list">
                                    <td className="title">
                                    <div className="thumb">
                                        <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                    </div>
                                    <div className="candidate-list-details">
                                        <div className="candidate-list-info">
                                        <div className="candidate-list-title">
                                            <h5 className="mb-0"><a href="#">Vickie Meyer</a></h5>
                                        </div>
                                        <div className="candidate-list-option">
                                            <ul clclassNamess="list-unstyled">
                                            <li><i class="fa fa-phone" aria-hidden="true"></i> 548979785</li>
                                            <li><i className="fas fa-map-marker-alt pr-1"></i>Minneapolis, MN 55406</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td className="candidate-list-favourite-time text-left">
                                        <span> A</span>
                                    </td>
                                    <td class="candidate-list-favourite-time text-left">
                                    <span className=''>  Gotta blow this guy up </span>
                                      
                                    </td>
                                    <td>
                                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                        <li><a onClick={handleShow_edit} className="text-info" data-toggle="tooltip"  data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                                        <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                                   </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="text-center mt-3 mt-sm-3">
                                <ul className="pagination justify-content-center mb-0">
                                <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                                <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">25</a></li>
                                <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
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
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Form>
        
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" />
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Amman, Jordan" />
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="+90 5524887540" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose_new}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose_new}>
            Add Task
          </Button>
        </Modal.Footer>
        </Form>

      </Modal>

    {/* Edit Customer Modal */}
      <Modal id="editcustomer" show={show_edit} onHide={handleClose_edit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control type="text" placeholder="Mohammed abdo" />
                <Form.Label>Customer Rank</Form.Label>
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
            Edit task
          </Button>
        </Modal.Footer>
        </Form>

      </Modal>
      </>
    )
}
export default Calendars

