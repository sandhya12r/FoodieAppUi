import React from 'react'
import { useFormik } from 'formik'
import { validateRegister } from './lib/validate'
function Register() {
  const formik =useFormik({
    initialValues:{
      username:'',
      email:'',
      password:'',
      cpassword:''
    },
    validate: validateRegister,
    onSubmit
  })

  async function onSubmit(values){
    console.log(values)
  }
  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-1'>
        <p className="level-1 strong">Register</p>
        <form className='flex-col align-items-center justify-content-center gap-2' onSubmit={formik.handleSubmit}>
            <input 
            type="text" 
            className="box" 
            placeholder='Username'
            {...formik.getFieldProps('username')}/>
            {formik.errors.username ?<span>{formik.errors.username}</span>:<></>}
            <input 
            type="email"
            className='email'
            placeholder='email'
            {...formik.getFieldProps('email')}
            />
            {formik.errors.email ?<span>{formik.errors.email}</span>:<></>}
            <input type="password" 
            className="box" 
            placeholder='Password' 
            {...formik.getFieldProps('password')}/>
            {formik.errors.password ?<span>{formik.errors.password}</span>:<></>}
            <input type="password" 
            className="box" 
            placeholder='Confirm Password' 
            {...formik.getFieldProps('cpassword')}/>
            {formik.errors.cpassword ?<span>{formik.errors.cpassword}</span>:<></>}
            <button className='custom-btn pointer'>Register</button>
        </form>
    </div>
  )
}

export default Register