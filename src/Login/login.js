import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          <span>Don't u have a account</span>
         <Link to="/register"> <button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
