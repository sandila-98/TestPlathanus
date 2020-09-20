import React , {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Input,
    Col,
    Row
  } from 'reactstrap';
  import {BsSearch} from 'react-icons/bs';


  const Headers = (props) => {
    return (
      <div>
            <Navbar expand='md' color='transparent' className='navHeader'>
                <Col sm={1} className='text-center'>
                    <NavbarBrand href='/' className='text-light'>Home</NavbarBrand>
                </Col>
                <Col sm={1} className='text-center'>
                    <NavbarBrand href='' className='text-light'>What we do?</NavbarBrand>
                </Col>
                <Col sm={1} className='text-center'>
                    <NavbarBrand href='' className='text-light'>Testimonial</NavbarBrand>
                </Col> 
                <Col sm={1} className='text-center'> 
                    <NavbarBrand href='' className='text-light'>Contact Us</NavbarBrand>
                </Col>
                
                <Col sm={6} className='text-center'>
                    <NavbarBrand href='' className='text-light'>PLATHANUS</NavbarBrand>
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
      </div>
    );
  }

export default Headers;

