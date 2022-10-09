import { useState , useEffect } from "react";
import validateInfo from "./validateInfo";

const useForm = (callback,validate) => {
    const[Values , setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    // state the errors 
    const[errors,setErrors] = useState({})
    // inorder to make the submit button works
    // first it's false because it's not submitted yet
    const[isSubmitting, setIsSubmitting] = useState(false)

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
        // set the values of errors that have been defined before
        setErrors(validate(Values));
        // submitting set to true if clicked 
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },
    [errors]
    );


    return {handleChange , Values ,handleSubmit,errors};
};

export default useForm;