import React from 'react';
import axios from 'axios';
import {Button, Row, Col} from 'reactstrap';
import {IoMdArrowDown} from 'react-icons/io';
import {style} from './css/style.css';

const imagemSlide = require('./images/slide/imagem-slide.jpg');

class Slide extends React.Component{
    render(){
        return(
            <div>
                <Row className='justify-content-md-center'>
                    <img src={imagemSlide} className='imageSlide'/>
                    
                    <div className='divSlide'>      
                        
                        <div>
                            <h1 className='tituloSlide'>Art is Eternal Happiness</h1>
                        </div>

                        <div className='text-center'>
                            <Button className='bottonSlide'>WORK WHIT US</Button>
                        </div>
                        
                        <div className='text-center'>
                            <form>
                                <input className='inputSlide' type='file' /><br />
                                <input className='mt-2 inputSlide' type="submit" value="Enviar" />
                            </form>
                        </div>
                    
                    </div>
                </Row>
            </div>
        );
    }
}

export default Slide;