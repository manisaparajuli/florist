import React from 'react'
import "./Css/Authentication.css"

const Authentication = () => {
  
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
          <a className="link" href="/login">Log In</a>
        </form>
      </div>
    </div>
  )
}

export default Authentication
