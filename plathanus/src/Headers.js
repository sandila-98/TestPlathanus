import React , {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Input,
    Col,
    Row,
  } from 'reactstrap';
  import {BsSearch} from 'react-icons/bs';


  const Headers = (props) => {
    return (
        <Navbar color='transparent' className='navHeader'>
                <Col sm={2} className='text-center'>
                    <NavbarBrand className='text-light' href="#">Home</NavbarBrand>
                </Col>
                <Col sm={2} className='text-center'>
                    <NavbarBrand className='text-light' href="#">What we do?</NavbarBrand>
                </Col>
                <Col sm={2} className='text-center'>
                    <NavbarBrand className='text-light' href="#">Testimonial</NavbarBrand>
                </Col> 
                <Col sm={2} className='text-center'> 
                    <NavbarBrand className='text-light' href="#">Contact Us</NavbarBrand>
                </Col>
                
                <Col sm={2} className='text-center'>
                    <NavbarBrand className='text-light'>PLATHANUS</NavbarBrand>
                </Col>

                <Col sm={2}>
                    <div className='divHeader'>
                        <Row>
                            <Col sm={9}>
                                <Input className="inputHeader" placeholder='Search...' />  
                            </Col>
                            <Col sm={3}>
                                <BsSearch className="iconHeader mt-2" /> 
                            </Col>
                        </Row>
                    </div>
                </Col>
        </Navbar>
    );
  }

export default Headers;

