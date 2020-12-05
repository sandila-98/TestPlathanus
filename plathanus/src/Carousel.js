import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const imagemSlide = require('./images/slide/image-slide.jpg');
const imagemSlide1 = require('./images/slide/img-slide.jpg');
const items = [
  {
    src: imagemSlide,
    key: '1'
  },
  {
    src: imagemSlide1,
    key: '2'
  }
];

const Slide = () => <UncontrolledCarousel items={items} className='imageSlide' />;

export default Slide;