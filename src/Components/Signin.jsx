import React from 'react';
import './Signin.css';
import logo from './logo.png';

export default function Signin() {
  return (
    <div className="signin-container">  
      <div className="card">
        <main className="form-signin">
          <form>
            <img className="logo" src={logo} alt="Company logo"/>
            <h1 className="h3">Please sign in</h1>
            <div className="form-floating" id="myEmail">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating" id="myPwd">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <p className="m">&copy; 2024</p>
          </form>
        </main>
      </div>
    </div>
  );
}


