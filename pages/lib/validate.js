export default function login_validate(values){
    const errors={}

    //Email Validation
    if(!values.email){
        errors.email ="Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      //Password validation

      if(!values.password){
        errors.password="Required"
      } else if (values.password.length < 8 || values.password.length > 20){
        errors.password="Length cannot be less than 8 or greater than 20"
    } else if(values.password.includes(' ')){
        errors.password="Invalid password"
    }

    return errors
}

export function validateRegister(values){
    const errors = {}

    if(!values.email){
        errors.email="Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Password Validation
    if(!values.password){
        errors.password="Required"
    }else if (values.password.length < 8 || values.password.length > 20){
        errors.password="Length cannot be less than 8 or greater than 20"
    }else if(values.password.includes(' ')){
        errors.password="Invalid Password"
    }
// Confirm Password Validation
    if(!values.cpassword){
        errors.cpassword="Required"
    }else if(values.cpassword != values.cpassword){
        errors.cpassword="Password Didnt Match"
    }else if (values.cpassword.length < 8 || values.cpassword.length > 20){
        errors.cpassword="Length cannot be less than 8 or greater than 20"
    }else if(values.cpassword.includes(' ')){
        errors.cpassword="Invalid Password"
    }

    return errors
}