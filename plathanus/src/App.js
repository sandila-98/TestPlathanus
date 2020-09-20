import React from 'react';
import { Form, Input } from 'reactstrap';
import Headers from './Headers';
import Slide from './Slide';
import Article from './Article';


function App (props){
  return (
    <div>
    <Headers />
    <Slide />
    <Article />
  </div>
  );
};

export default App;
