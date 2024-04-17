import React from 'react'
import "./Css/Authentication.css"
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
  const navigate = useNavigate()
  return (
    <div className='login-container'>
      <div className="login">
        <h4>Sign up</h4>
        <form>
          <div className="text_area">
            <input type="text" name="username" placeholder="username" className="text_input" />
          </div>
          <div className="text_area">
            <input type="email" name="email" placeholder="email" className="text_input" />
          </div>
          <div className="text_area">
            <input type="password"  name="password" placeholder="password" className="text_input" />
          </div>
          <div className="text_area">
            <input type="password"  name="confirm password" placeholder="password" className="text_input" />
          </div>
          <button type="submit" value="Sign Up" className="btn">Sign up</button>
          <p>Already have an acccount?</p>
          <span className="link" onClick={() => {navigate("/login")}}>Log In</span>
        </form>
      </div>
    </div>
  )
}

export default Authentication
