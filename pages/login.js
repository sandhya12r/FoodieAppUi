import { signIn } from 'next-auth/react'
import React from 'react'
import { useFormik } from 'formik'
import login_validate from './lib/validate'
import { useRouter } from 'next/router'

function Login() {
  const router=useRouter()
const formik = useFormik({
  initialValues:{
    email:'',
    password:''
  },
  validate: login_validate,
  onSubmit
})

async function onSubmit(values){
  const status = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    callbackUrl:"/"
  })

  
  console.log(status)
  if(status.ok){
    router.push(status.url)
  }

}
  // Google Login Handler
  async function handleGoogleSignIn(e){
    e.preventDefault()
    signIn('google', {callbackUrl: 'http://localhost:3000'})
  }
  async function handleGitSignIn(){
    signIn('github', {callbackUrl: 'http://localhost:3000'})
  }

  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-1'>
        <p className="level-1 strong">LOGIN</p>
        <form className='flex-col align-items-center justify-content-center gap-2' onSubmit={formik.handleSubmit}>
            <input 
            className='box' 
            type="email" 
            name="email" 
            placeholder='email'
            {...formik.getFieldProps('email')}/>
            {formik.errors.email ?<span>{formik.errors.email}</span>:<></>}

            <input
            className='box' 
            type="password" 
            name="password" 
            placeholder='password'
            {...formik.getFieldProps('password')}/>
            {formik.errors.password ?<span>{formik.errors.password}</span>:<></>}
            <button className='login-btn custom-btn pointer' type='submit'>Login</button>
            <button className="login-btn custom-btn pointer white-btn" onClick={handleGoogleSignIn}>Login with Google</button>
            <button className="login-btn custom-btn pointer white-btn" onClick={handleGitSignIn}>Login with Github</button>
        </form>

    </div>
  )
}

export default Login