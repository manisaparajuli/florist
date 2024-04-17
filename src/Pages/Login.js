import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Css/Authentication.css'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='login-container'>
      <div className="login">
        <h4>Log in</h4>
        <form>
          <div className="text_area">
            <input type="text" name="username" placeholder="username" className="text_input" />
          </div>
          <div className="text_area">
            <input type="password"  name="password" placeholder="password" className="text_input" />
          </div>
          <button type="submit" value="Sign Up" className="btn">Log in</button>
          <p>Don't have an acccount?</p>
          <span className="link" onClick={() => {navigate("/authentication")}}>Sign up</span>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Login
