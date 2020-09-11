import React , {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Input,
    Col,
  } from 'reactstrap';

  const Headers = (props) => {
    return (
      <div>
            <Navbar color='transparent' expand='md' style={{position:'absolute', zIndex:'20', width:'100%'}}>
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
                    <Input style={{borderRadius:'70px', backgroundColor:'rgba(255, 255, 255, .4)', border:'1px solid rgba(255, 255, 255, .4)', color:'#ffffff'}} placeholder='Search...' />
                </Col>
            </Navbar>
      </div>
    );
  }

export default Headers;

