import React from 'react'
import useForm from './Useform'
import validate from './validateInfo'
import './Form.css';


const FormSignup = ({submitForm}) => {
    const{handleChange,Values,handleSubmit,errors} = useForm(submitForm,validate);

  return (
    <div className="form-content-right">
       <form className="form" onSubmit={handleSubmit}>
            <h1>Get started</h1>
            <div class="form-inputs">
              <label for="username">Username</label>
              <input 
                type="text"
                class="form-input" 
                name="username" 
                id="username"  
                placeholder="Enter your username"  
                value={Values.username} 
                onChange={handleChange}
              />
             {errors.username && <p>{errors.username}</p>}
            </div>
            <div class="form-inputs">
              <label for="email">Email</label>
              <input 
                type="email"
                class="form-input" 
                name="email" id="email"  
                placeholder="Enter your email" 
                value={Values.email} 
                onChange={handleChange}
               />
               {errors.email && <p>{errors.email}</p>}
            </div>
            <div class="form-inputs">
              <label for="password">Password</label>
              <input 
                type="password"
                class="form-input" 
                name="password" 
                id="password"  
                placeholder="Enter your password" 
                value={Values.password}
                onChange={handleChange}
                />
                 {errors.password && <p>{errors.password}</p>}
            </div>
            <div class="form-inputs">
              <label for="password2">Confirm Password</label>
              <input 
                type="password"
                class="form-input" 
                name="password2" 
                id="password2"  
                placeholder="Confirm password" 
                value={Values.password2} 
                onChange={handleChange}
                />
                 {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit'>Sign up</button>
            <span className='form-input-login'>Already have an account?Login<a href='' >here</a></span>
       </form>
    </div>
    

  )
}

export default FormSignup