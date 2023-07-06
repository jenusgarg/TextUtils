import React, { useState } from 'react'

import './AddInstruction.css';
import logo from './logo.png';
export default function AddInstruction() {
  
  
  
  const [inputValue, setInputValue] = useState('');
  const [storedValues, setStoredValues] = useState([]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStoreValue = () => {
    const lines = inputValue.split('\n').filter((line) => line.trim() !== '');
    
    setStoredValues(lines);
    setInputValue('');
  };




  return (
    <>
    <body>
  
    
    <div className = "quiz-container">
    <button  className="home-btn"  >Back</button>
        <img src={logo} alt=""/>
        <h2>ADD Instructions</h2>
        <form  className="form-some">
         
            <textarea  id="inst" cols="30" rows="10" placeholder ="Write instructions here ..." 
            value={inputValue}
            onChange={handleInputChange}
            />





            </form>
            <button  className="submitb"  onClick={handleStoreValue}>Update Instructions</button>
            <button  className="submitb"  >Preview</button>  
            
    </div>
    
    </body>    
    </>
  )
}
