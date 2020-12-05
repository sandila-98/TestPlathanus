import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import {FaCameraRetro} from 'react-icons/fa';
import {FaBriefcase} from 'react-icons/fa';
import {FaTachometerAlt} from 'react-icons/fa';

const Article = (props) => {
    return (
        <div>
            <Row className='justify-content-md-center'>
               
                <Col sm={12} className='text-center colCard'>
                    <h3 className='tituloCard'>WHAT WE DO</h3>
                    <hr className='hrCard'/>
                    <p className='pCard'>
                        Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </p>
                </Col>
            
            </Row>
           
            <Row>
                <Col sm={4} className='text-center'>
                   
                    <div>
                        <FaCameraRetro className='iconCard' />
                    </div>

                    <div>
                        <h5 className='font-weight-bold tituloCard'>Lorem Ipsum</h5>
                    </div>
                   
                    <div>
                        <p className= 'pCard'>This is Photoshop's version of Lorem<br /> Ipsum.  
                            Proin gravida nibh vel velit<br /> auctor aliquet. 
                            Aenean sollicitudin. <br />
                            Lorem quis bibendum auctor.
                        </p>
                        <Button className='buttonCard'>Lorem Ipsum</Button>
                    </div>
                
                </Col>

                <Col sm={4} className='text-center' style={{marginBottom:'5%'}}>
                   
                    <div>
                        <FaTachometerAlt className='iconCard' />
                    </div>
                    
                    <div>
                        <h5 className='font-weight-bold tituloCard'>Lorem Ipsum</h5>
                    </div>
                   
                    <div>
                        <p className= 'pCard'>This is Photoshop's version of Lorem<br /> Ipsum.  
                            Proin gravida nibh vel velit<br /> auctor aliquet. 
                            Aenean sollicitudin. <br />
                            Lorem quis bibendum auctor.
                        </p>
                        <Button className='buttonCard'>Lorem Ipsum</Button>
                    </div>
                
                </Col>

                <Col sm={4} className='text-center'>
                   
                    <div>
                        <FaBriefcase className='iconCard' />
                    </div>
                    
                    <div>
                        <h5 className='font-weight-bold tituloCard'>Lorem Ipsum</h5>
                    </div>
                    
                    <div>
                        <p className= 'pCard'>This is Photoshop's version of Lorem<br /> Ipsum.  
                            Proin gravida nibh vel velit<br /> auctor aliquet. 
                            Aenean sollicitudin. <br />
                            Lorem quis bibendum auctor.
                        </p>
                        <Button className='buttonCard'>Lorem Ipsum</Button>
                    </div>
                
                </Col>
            
            </Row>
        <hr style={{border: '2px solid #999999'}}/>
        </div>
    );
}

export default Article;