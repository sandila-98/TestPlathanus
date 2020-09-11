import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import {FaCameraRetro} from 'react-icons/fa';
import {FaBriefcase} from 'react-icons/fa';
import {FaTachometerAlt} from 'react-icons/fa';


const Article = (props) => {
    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col sm={12} className='text-center'>
                    <h3 style={{color:'rgba(0, 0, 0, .5)'}}>WHAT WE DO</h3>
                    <hr style={{border: '2px solid #999999', borderRadius:'2px', margin: '10px 910px'}}/>
                    <p  style={{marginBottom:'7%', color:'rgba(0, 0, 0, .6)'}}>
                        Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className='text-center'>
                    <div><FaCameraRetro style={{color:'#54d154', fontSize:'100px', marginBottom:'5%'}} /></div>
                    <div><h5 className='font-weight-bold' style={{marginBottom:'3%', color:'rgba(0, 0, 0, .5)'}}>Lorem Ipsum</h5></div>
                    <div>
                        <p style={{color:'rgba(0, 0, 0, .6)'}}>This is Photoshop's version of Lorem<br /> Ipsum.  
                            Proin gravida nibh vel velit<br /> auctor aliquet. 
                            Aenean sollicitudin. <br />
                            Lorem quis bibendum auctor.
                        </p>
                        <Button style={{borderRadius:'50px', border:'1px solid #54d154',  backgroundColor:'#54d154'}}>Lorem Ipsum</Button>
                    </div>
                </Col>

                <Col sm={4} className='text-center' style={{marginBottom:'5%'}}>
                    <div><div><FaTachometerAlt style={{color:'#54d154', fontSize:'100px', marginBottom:'5%'}} /></div></div>
                    <div><h5 className='font-weight-bold' style={{marginBottom:'3%', color:'rgba(0, 0, 0, .5)'}}>Lorem Ipsum</h5></div>
                    <div>
                        <p style={{color:'rgba(0, 0, 0, .6)'}}>This is Photoshop's version of Lorem<br /> Ipsum.  
                            Proin gravida nibh vel velit<br /> auctor aliquet. 
                            Aenean sollicitudin. <br />
                            Lorem quis bibendum auctor.
                        </p>
                        <Button style={{borderRadius:'50px', border:'1px solid #54d154',  backgroundColor:'#54d154'}}>Lorem Ipsum</Button>
                    </div>
                </Col>

                <Col sm={4} className='text-center'>
                    <div><div><FaBriefcase style={{color:'#54d154', fontSize:'100px', marginBottom:'5%'}} /></div></div>
                    <div><h5 className='font-weight-bold' style={{marginBottom:'3%', color:'rgba(0, 0, 0, .5)'}}>Lorem Ipsum</h5></div>
                    <div>
                        <p style={{color:'rgba(0, 0, 0, .6)'}}>This is Photoshop's version of Lorem<br /> Ipsum.  
                            Proin gravida nibh vel velit<br /> auctor aliquet. 
                            Aenean sollicitudin. <br />
                            Lorem quis bibendum auctor.
                        </p>
                        <Button style={{borderRadius:'50px', border:'1px solid #54d154',  backgroundColor:'#54d154'}}>Lorem Ipsum</Button>
                    </div>
                </Col>
            </Row>
        <hr style={{border: '2px solid #999999'}}/>       
        </div>
    );
}

export default Article;