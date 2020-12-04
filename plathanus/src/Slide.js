import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import {style} from './css/style.css';
import Carousel from './Carousel';


class Slide extends React.Component{
    render(){
        return(
            <div>
                <Row className='justify-content-md-center'>
                    <Carousel />
                    <Col sm={12} className='divTitulo'>
                        <div>
                            <div>
                                <h1 className='tituloSlide text-center'>Art is Eternal Happiness</h1>
                            </div>

                            <div className='text-center'>
                                <Button className='bottonSlide'>WORK WHIT US</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Slide;