import React,{Component} from 'react';
import Rating from './components/Rating';
//import Products from './components/Products';
//import {Button} from 'react-bootstrap';

function App() {
  const isValid = true;
  return (
    <div>
      {/*
        <Products/>
         <Button variant="primary" disabled={!isValid}>Default</Button>
      */}
         <Rating rating="1"/>
         <Rating rating="2"/>
         <Rating rating="3"/>
         <Rating rating="3"/>
         <Rating rating="4"/>
         <Rating rating="5"/>
    </div>
  );
}

export default App;
