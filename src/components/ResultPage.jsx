import React from 'react'
import './resultPage.css'
export default function ResultPage() {
  return (
    <>
    <h3 class = "marks"> Total Score: 9/20 </h3>
 
 <div class ="videos">
 
         
             <iframe width="560" height="315" src="https://www.youtube.com/embed/UCZIJI5HVeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
         
             <iframe width="560" height="315" src="https://www.youtube.com/embed/SKmkFOs6a4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
         
             <iframe width="560" height="315" src="https://www.youtube.com/embed/3klNnH13t4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
         
     </div>
 <section id="quizsection">
     <input type="hidden" name="csrfmiddlewaretoken" value="pLBXXXRayLadUrkVPR67utEn5FXqGWvTavD3JMmVLQK33zepmKr6XbCXQqNIa7Tq"/>
     <div id="question_box1" class="question_box">
         
         <div class="qbox">
 
             <div class="top colorpanel">
                 Question 1 <p class="timelevel"> Score: 1 </p>
             </div>
             <div class="main_box" id="main_box">
                 <p class="question">What is the reason behind armature structure for both DC and AC machines being laminated?</p>
                 
                 <div class="options_section">
                     
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>reduce i2R losses<span></span></p>
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>reduce the leakage flux<span></span></p>
                     
                     <p name='answer_' class="options" ><input type="radio" disabled style={backgroundcolor: rgb(21, 191, 21),
color: white;}/>reduce the eddy current losses<span></span></p>
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>for better operating power factor<span></span></p>
                     
                     
                     
                    
                     
                    
                     <div class="correct">c</div>
                     <div class="correct">c</div>
                     <details class="explanation">
                         <summary>Explanation </summary>
                         
                         <div class="explanation-text">
                         <p>NA</p>
                             </div>
                         
 
                     </details>
                 </div>
             </div>
         </div>
         
         
         <div class="qbox">
 
             <div class="top colorpanel">
                 Question 19 <p className="timelevel"> Score: 1 </p>
             </div>
             <div class="main_box" id="main_box">
                 <p class="question">If the terminal voltage of 220-V dc generator having armature resistance of 1 ohms. The induced emf produced is 200-V. The armature current for the above machine is?</p>
                 
                 <div class="options_section">
                     
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>-20 A<span></span></p>
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>20 A<span></span></p>
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>-10 A<span></span></p>
                     
                     <p name='answer_' class="options"><input type="radio" disabled/>10 A<span></span></p>
                     
                     
                     
                    
                     
                    
                     <div class="correct">b</div>
                     <div class="correct">b</div>
                     <details class="explanation">
                         <summary>Explanation </summary>
                         
                         <div class="explanation-text">
                         <p>NA</p>
                             </div>
                         
 
                     </details>
                 </div>
             </div>
         </div>
         
 
                    
        
         
     </div>
 </section>






    </>
  )
}
