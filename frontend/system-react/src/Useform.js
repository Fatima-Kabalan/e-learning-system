import { useState , useEffect } from "react";

const useForm = () => {
    const[Values , setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    // state the errors 
    const[errors,setErrors] = useState({})


    // whenever changing something it update the values
    const handleChange = e =>{
        const { name , Value } = e.target
        setValues({
            //spreading in the values
            ...Values,
            //targeting the name inputs
            [name]:Value
        })
    };

    // handle submit button
    const handleSubmit = e => {
        e.preventDefault();
    };


    return {handleChange , Values ,handleSubmit};
};


export default useForm;