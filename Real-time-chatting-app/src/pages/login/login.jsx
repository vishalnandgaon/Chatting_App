import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login =() => {

    const[currState,setCurrState]=useState("Sign up");
    return (
        <div className='login'>
            <img src={assets.logo_big} alt="Chat logo" className='logo' />
            <form className='login-form'>
                <h2>{currState}</h2>
                {currState === "Sign up" ? <input type="text" placeholder='username' className="form-input" required /> : null}
                <input type="email" placeholder='email address' className="form-input" required />
                <input type="password" placeholder='password' className="form-input" required />
                <button type='submit'>{currState === "Sign up" ? "Create account" : "Login Now"}</button>
                <div className='login-term'>
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>
                <div className='login-forgot'>
                    {
                        currState === "Sign up" ? <p className='login-toggle'>Already have an account <span onClick={()=> setCurrState("Login") }>Login here</span></p> : <p className='login-toggle'> Don't have an account <span onClick={()=> setCurrState("Sign up") }>  Click here</span></p>
                    }
                    
                </div>
            </form>
        </div>
    )
}
export default Login