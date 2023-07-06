import React, { useState } from 'react'

function AddQuestion() {
   

    const [Question, setQuestion] = useState({
        Question: '',
        marks: 0,
        type:'',
        level:'',
        time:0,
        explanition:'',
        correctAnswer:'',
    });
    const [options, setOptions] = useState([]);
    const [myStyle,setMyStyle]    =useState({
        display : 'initial',
    })
    const [myStyle1,setMyStyle1]    =useState({
        display : 'none'
    })


       const handleType =(event)=>{
        
        if(event.target.value ==="I"){
            setMyStyle1({
                display : 'initial'
            })
            setMyStyle({
                display : 'none'
            })
        }
        else if(event.target.value === "M"||event.target.value ==="O") {
            setMyStyle1({ 
                display : 'none'
            })
            setMyStyle({
                display : 'initial'
            })
        }


                setQuestion({...Question,type:event.target.value});
                   }
       
       const handleLevel =(event)=>{
         setQuestion({...Question,level:event.target.value});
       }
        
       const onChangetime =(event)=>{
        
        setQuestion({...Question,time:event.target.value});
        
            
    }
        const onChangeQuestion =(event)=>{
            setQuestion({...Question,Question:event.target.value});
        
           }

           const onChangeExplain =(event)=>{
            setQuestion({...Question,explanition:event.target.value});
           
           }
           const onChangeCorrectAnswer =(event)=>{
            setQuestion({...Question,correctAnswer:event.target.value});
           
           }

           function addOption() {
            setOptions([...options, { text: '', additionalData: '' }]);
          }
          
          
          
          function deleteOption(index) {
            const updatedOptions = [...options];
            updatedOptions.splice(index, 1);
            setOptions(updatedOptions);
          }
         
          function handleOptionChange(e, index) {
            const updatedOptions = [...options];
            updatedOptions[index].text = e.target.value;
            setOptions(updatedOptions);
          }
          
          
          

return (
    <>
    
  
    <form >
    
       
        <div className="tostrip">
           Add New Question
        </div>

    <div className="main_box">
        
        <div className="type_box">
            <div className="tipe">
                Type:
                <select value={Question.type} onChange={handleType}>
                    <option value ="O" >Objective Type Question</option>
                    <option value ="M">Multiple Correct Question</option>
                    <option value ="I">Integer Type Question</option>
                </select>
            </div>
            <div className="level"  value={Question.level}  onChange={handleLevel}>
                Level:
                <select >
                    <option  value="Easy">Easy</option>
                    <option  value="Medium">Medium</option>
                    <option  value="Hard">Hard</option>
                </select>
            </div>
            
            
            <div className="time">
                Time(s):
                <input type="number" id="quantity"  name="time" min="1" max="360" value={Question.time} onChange={onChangetime}/><br/>
            </div>
            </div>
        
        <textarea name="question" type="text" className="question" id="question" placeholder="Write the question here"
            rows="2" cols="50" value={Question.Question} onChange={onChangeQuestion} > </textarea>

          <div>
            <input className="image" type="file" name="photo" id="image-option" placeholder="Add Image" accept="image/*"  />
        </div>



        
        

        <div>
    {options.map((option, index) => (
      <div id="options_doing">
            
      <div className="option_line" key={index}>
          <input type="checkbox" className="correct" name="selection" on/>
          <textarea  type="text" className="options_written" value={option.text}
          onChange={(e) => handleOptionChange(e, index)}   placeholder={"option "+(index+1)}  ></textarea>
          <button type="button" className="delete_opt" onClick={() => deleteOption(index)}><i className="bx bx-trash"></i></button>
          </div>
</div>
    ))}
</div>
        <button   onClick={addOption}  type="button" class="add-option" id='BUTTON' style={myStyle}>
            <i class='bx bx-plus' ></i>Add option
        </button>   
        {/*Add Correct answer */}
        <input type="text" id="hide" style={myStyle1} name="correct" value={Question.correctAnswer} onChange={onChangeCorrectAnswer} placeholder="Correct answer"/>
        
        <div className="explanation">
            <textarea type="text" id="exp" className="resize fix" name="explanation"
                min="1" max="1000" placeholder="explanation"  value={Question.explanition} onChange={onChangeExplain} ></textarea>
        </div>
        
        <div id="ending_options">
            <textarea data-row className="options_all" name="options" 
                placeholder="Option"></textarea>
        </div>        
        
        
        <div className="last">
            <input className="btn" id='save_btn' type="submit" value='Save' placeholder="save"/>
        </div>
        </div>
</form>





    </>
    

  )
}

export default AddQuestion