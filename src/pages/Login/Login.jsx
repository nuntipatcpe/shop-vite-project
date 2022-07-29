import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="container-form">
        <form action="">
        <h1>Wecome</h1>
        <div className="grid-container">
          <input type="text" placeholder="username" required/>
          <input type="password" placeholder="password" required/>
          <div></div>
          <div className="con-regis">
            <a className="forgot-password?">Forgot your password?</a>
            <a className="Register">Sing Up</a>
          </div>
        </div>
        <div className="btn">
        <input type='submit' value='Join' className="submit"/>
        </div>
      </form>
      </div>
      
    </div>
  );
}

export default Login;
