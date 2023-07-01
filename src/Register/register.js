import React from 'react';
import "./register.scss";

export default function Register(props) {
    

    return (
        <>
            <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          {/* <span>Don't u have a account</span> */}
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="city" placeholder="City"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div> 
        </>
    )
}
