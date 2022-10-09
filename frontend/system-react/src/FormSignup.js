import React from 'react'

const FormSignup = () => {
  return (
    <div className="form-content-right">
       <form className="form">
            <h1>Get started</h1>
            <div class="form-inputs">
              <label for="username"></label>
              <input type="text"
                class="form-input" name="username" id=""  placeholder="Enter your username" />
            </div>
       </form>
    </div>

  )
}

export default FormSignup