import React from 'react';
import { Form, Input } from 'reactstrap';
import Headers from './Headers';
import Footer from './Footer';
import Slide from './Slide';
import Article from './Article';


function App (props){
  return (
    <div>
    <Headers />
    <Slide />
    <Article />
    <Footer />
  </div>
  );
};

export default App;
