import React ,{useState} from 'react'




export default function TextForm(props) {
  const [text, setText] = useState('');
      const handleUpClick =()=>{
       // console.log("uppercase was clicked");
        let nt=text.toUpperCase();
        setText(nt);
      }
      const handleLoClick =()=>{
        // console.log("uppercase was clicked");
         let nt=text.toLowerCase();
         setText(nt);
       }
       const handleClearClick =()=>{
        // console.log("uppercase was clicked");
         let nt='';
         setText(nt);
       }

       const handleCopy =()=>{
          var text=document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
       }

          const handleOnChange =(event)=>{
        //console.log("on Change");
        setText(event.target.value);
       
      }
      const handleExtraSpace =()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "));
     }
      
  return (
        <>
              <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
                    <h1>{props.heading}</h1>
                      <div className="mb-3" >
                      
                      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',color: props.mode==='dark'? 'white':'black'}}id="myBox" rows="8"></textarea>
                      </div>

                      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase </button>
                      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
                      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear </button>
                      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy </button>
                      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space </button>
              </div>


              <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
                   <h2>Your text summary</h2>
                   <p> {text.split(" ").length }  words and {text.length} characters</p>
                   <p> {0.008*text.split(" ").length }  Minutes to Read</p>
                   <h2>Preview</h2>
                   <p>{text.length>0?text:"Enter the something in above text box to preview it here"}</p>

              </div>
              
              </>
            )
          }
