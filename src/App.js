import React ,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light');
 
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
      <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is alert                 "/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"  mode={mode}/>
      </div>
      
          </>
  );
}

export default App;
