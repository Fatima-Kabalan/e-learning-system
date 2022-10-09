import React,{useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
  const[isSubmitted, setIsSubmitted] = useState(false)


  function submitForm(){
    setIsSubmitted(true);
  }
  return (
    <div>
        <FormSignup/>
        // if it's not submitted I wanna display Formsignup 
        {!isSubmitted ? <FormSignup submitForm = {submitForm} /> : <FormSuccess />} 
        // else if I do already submitted I wanna pass in FormSuccess
    </div>
  )
}

export default Form
