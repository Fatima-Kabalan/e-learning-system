import React from 'react'
import './Form.css';

const FormSignin = ({submitForm, handleChange, loginDetails}) => {
  return (
    <div className="form-content-right">
       <form className="form" onSubmit={submitForm}>
            <h1>E-learning System</h1>
            <div className="form-inputs">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                className="form-input" 
                name="email" id="email"  
                placeholder="Enter your email" 
                value={loginDetails.email} 
                onChange={handleChange}
               />
            </div>
            <div className="form-inputs">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                className="form-input" 
                name="password" 
                id="password"  
                placeholder="Enter your password" 
                value={loginDetails.password}
                onChange={handleChange}
                />
            </div>
            <button className='form-input-btn' type='submit'>Login</button>       
            </form>
    </div>
    

  )
}

export default FormSignin