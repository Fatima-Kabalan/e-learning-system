import React,{useState} from 'react'
import FormSignin from './FormSignin'
import './Form.css';

const Form = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(loginDetails),
      mode: 'no-cors'
    });

    const data = await res.json();  
    console.log("data: ", data)
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img src="./images/img.jpg" alt="e-learning-pic" className='form-img' />
        </div>
        <FormSignin submitForm={submitForm} handleChange={handleChange} loginDetails={loginDetails} />
      </div>
    </>
  );
};

export default Form
