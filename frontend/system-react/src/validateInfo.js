export default function validateInfo(Values){
    let errors = {};

    // trim is inorder to git rid of whitespace
    // username validation
    if(!Values.username.trim()){
        errors.username = 'Username required';
    }

    // email validation
    if(!Values.email){
        errors.email = 'Email required';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Values.email))
    errors.email = 'Email address is invalid'

    // password validation
    if(!Values.password){
        errors.password = 'Password required';
    }else if(Values.password.length < 6 ) 
    errors.password = 'Password needs to be 6 charcters or more'

    if(!Values.password2){
        errors.password2 = 'Password required'; 
    }else if(Values.password2 != Values.password){
        errors.password2 = "Passwords don't match"
    }

    return errors;
}