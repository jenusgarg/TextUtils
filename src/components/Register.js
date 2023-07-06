import React from 'react'
import './Register.css';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';

const initialValues={
  username:"",
  email:"",
  Password:"",
  Confirm_Password:"", 
  roll_no_id:"",
  college:"",
};



const Register =() =>{
    const {values,errors,touched,handleChange,handleSubmit}= useFormik({
     initialValues:initialValues,
     validationSchema:signUpSchema,
     onSubmit: (values, { resetForm }) => {
       console.log(
        "data stored is here",
         values,
       
       );
       resetForm();
     },

   });
   console.log(
    "data stored is here",
     errors,
   );

     
  return (
    <>
          <div className="register_container">
   
      
            <div className="register_box">
             
               <div className="left_panel">
            <h2>Register Yourself on Aim2Crack!!</h2>
          
           <form onSubmit={handleSubmit} className="form_method">
            

               <fieldset className="form-group bottom_error">
                   <div className="rules_1">
                       {errors.username&&touched.username?(<small id="hint_id_username" className="form-text text-muted instruction">{errors.username} </small>):null}
                   </div>
                   <div class="rules_2">
                            {errors.Password&&touched.Password?(<small id="hint_id_password1" class="form-text text-muted">
                                <ul class="instruction">
                                    
                                    <li id='entire'>{errors.Password}</li>
                                </ul>
                            </small>):null}
                        </div> <div className="rules_3">
                       {errors.Confirm_Password&&touched.Confirm_Password?(<small id="hint_id_username" className="form-text text-muted instruction">{errors.Confirm_Password} </small>):null}
                   </div>


                   <div id="div_id_username" className="input">





                       <input type="text" name="username"
          className="textinput textInput form-control"  placeholder=" "   value={values.name} onChange={handleChange}/>

                       <label htmlFor="" className="form__label">Username</label>






                   </div>
                   <div id="div_id_email" className="input">





                       <input type="email" name="email" className="emailinput form-control" 
                           placeholder=" " value={values.email} onChange={handleChange} />
                       <label htmlFor="" className="form__label">Email</label>

                   </div>
                   <div className="input " id="div_id_password1">



                       <input type="password"  name="Password" autocomplete="new-password"
                           className="textinput textInput form-control  id_password1" 
                           id="id_password1" placeholder=" " value={values.Password} onChange={handleChange} />
                       <label for="" className="form__label" id="password_label">Password</label>
                       <span className="eye" >


                           <i id="hide1" className="bi bi-eye-fill"></i>
                           <i id="hide2" className="bi bi-eye-slash-fill"></i>
                       </span>


                   </div>
                   <div id="div_id_password2" className="input">


                       <input type="password" name="Confirm_Password" autocomplete="new-password"
                           className="textinput textInput form-control id_password2" 
                           id="id_password2" placeholder=" " value={values.Confirm_Password} onChange={handleChange}  />
                       <label for="" className="form__label" id="password_label2">Password Confirmation</label>
                       <span className="eye" >


                           <i id="hide12" className="bi bi-eye-fill"></i>
                           <i id="hide22" className="bi bi-eye-slash-fill"></i>
                       </span>

                   </div>
                   <div className="input" id="roll">
                       <input type="text" name="roll_no_id" placeholder=" " className="form-control"  value={values.roll_no_id} onChange={handleChange}/>
                       <label for="" className="form__label">Roll Number/Employee Id</label>
                   </div>
                   <div id="institute" className="input">

                       <input type="text" name="college" placeholder=" " className="form-control" value={values.college} onChange={handleChange} />
                       <label for="" className="form__label">College Name</label>
                   </div>
                   <div id="profile_name" className="input-box">
                 
                    Profile:
                    <select id="type" name="role">
                        <option id="S" value="s" selected>Student</option>
                        <option id="S" value="t" >Teacher</option>
                    </select>

           </div>
                  
                   <div className="sign">
                       <button className="btn btn-outline-info" type="submit" >Sign
                           Up</button>
                   </div>
               </fieldset>
           </form>
           
       </div>


       <div className="right_panel">

           <img src="/static/users/undraw_maker_launch_crhe.svg" alt=""/>

           <div className="border-top pt-3">
               <small className="text-muted">
                   <h3> Already have an account ?</h3>
                   <div className="sign_in">

                       <a className="ml-2" href="/login/">Sign In</a>
                   </div>
               </small>
           </div>
       </div>
   </div>
</div>
    
    
    </>
  )
}
export default Register;
