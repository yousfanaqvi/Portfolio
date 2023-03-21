import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.error = (message) => {
      // Do nothing
    };
    
    console.warn = (message) => {
      // Do nothing
    };
root.render( 
  
      <Main />
 
);
