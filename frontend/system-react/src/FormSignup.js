import React from 'react'

const FormSignup = () => {
  return (
    <div className="form-content-right">
       <form className="form">
            <h1>Get started</h1>
            <div class="form-inputs">
              <label for="username">Username</label>
              <input type="text"
                class="form-input" name="username" id="username"  placeholder="Enter your username" />
            </div>
            <div class="form-inputs">
              <label for="email">Email</label>
              <input type="text"
                class="form-input" name="email" id="email"  placeholder="Enter your email" />
            </div>
            <div class="form-inputs">
              <label for="password">Password</label>
              <input type="text"
                class="form-input" name="password" id="password"  placeholder="Enter your password" />
            </div>
            <div class="form-inputs">
              <label for="password2">Confirm Password</label>
              <input type="text"
                class="form-input" name="password2" id="password2"  placeholder="Confirm password" />
            </div>
            <button className='form-input-btn' type='submit'>Sign up</button>
            <span className='form-input-login'>Already have an account?Login<a href='' >here</a></span>
       </form>
    </div>
    

  )
}

export default FormSignup