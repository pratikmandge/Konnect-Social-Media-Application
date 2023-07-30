import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)

  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)

  const [data, setData] = useState({
    username : "", 
    email : "", 
    password : "", 
    dateOfBirth : ""
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isSignup){
      dispatch(signUp(data))
    }
    else{
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setData({
      username : "", 
      email : "", 
      password : "", 
      dateOfBirth : ""
    })
  }

  return (
    <div className='Auth'>
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
            <h1>Konnect</h1>
            <h6>Connect with your friends and world</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className='a-right'>
        <form action="" className='InfoForm authForm' onSubmit={handleSubmit}>
          <h3>
            {isSignup ? "Sign up" : "Log In"}
          </h3>
          <div>
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            className="InfoInput"
            onChange={handleChange}
            value={data.username} />
          </div>
          {isSignup &&
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                className="InfoInput"
                onChange={handleChange}
                value={data.email} />
              <input 
                type="Date" 
                placeholder="Date of Birth" 
                name="dateOfBirth" 
                className="InfoInput"
                onChange={handleChange}
                value={data.dateOfBirth} />
            </div>
          }
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              className="InfoInput"
              onChange={handleChange}
              value={data.password} />
          </div>
          <div>
            <span 
              style={{fontSize :'12px', cursor : "pointer"}} 
              onClick={()=>{setIsSignup((prev)=>!prev); resetForm()}}>
              {isSignup ? "Already have an account. LogIn!" : "Don't have an Accout? Sign Up"}
            </span>
          </div>
          <button 
            className="button InfoButton" 
            type='submit'
            disabled={loading} >
            {loading? "Loading..." : isSignup ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
