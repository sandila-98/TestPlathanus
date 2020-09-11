import React from 'react';
import axios from 'axios';
import {Button, Row, Col} from 'reactstrap';

const imagemSlide = require('./images/slide/imagem-slide.jpg');

class Slide extends React.Component{
    render(){
        return(
            <div>
                <Row className='justify-content-md-center'>
                    <img src={imagemSlide} style={{width : '100%', height:'80%', position:'absolute'}}/>
                    <div style={{marginTop:'12%', marginBottom:'7%', zIndex:'10'}}>      
                        <div>
                            <h1 style={{color:'#ffffff', fontSize:'75px'}}>Art is Eternal Happiness</h1>
                        </div>

                        <div className='text-center'>
                            <Button style={{borderRadius:'50px', border:'1px solid #54d154',  backgroundColor:'#54d154', marginTop:'4%', fontSize:'25px'}}>WORK WHIT US</Button>
                        </div>
                        <div className='text-center' style={{marginTop:'28%'}}>
                            <form>
                                <input type="file" name="image" onChange={this.onChangeHandler}/>
                                <br />
                                <br />
                                <input type="submit" value="Upload da Imagem" style={{borderRadius: '50px', border: 'none', backgroundColor:'rgba(255, 255, 255, .5)', fontSize:'20px'}} />
                            </form>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
        }
    }
    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:3000/upload", data, { 
    })
    .then(res => {
        console.log(res.statusText)
    })
}
}

export default Slide;