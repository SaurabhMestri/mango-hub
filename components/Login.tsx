import Image from "next/image";
import React, { useState } from "react";
import Google from "@/public/images/gogle-.png";
import Facebook from "@/public/images/facebook.png";
import Link from "next/link";
import Register from "./register";


type Props = {};

const Login = (props: Props) => {
  return (
    <div className="container">
      <div className="login-container">
        <form action="#" method="POST" className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="forget">
            <a href=""> Forget Password?</a>
          </div>
          <button className="btn" type="submit">
            Login
          </button><Link href='/register'>
          <button className="btn">Register</button>
          </Link>
          <div className="social-icons-btn">
            <a className="icons google" href="#">
              <Image src={Google} height={30} width={30}  alt="google"/>
            </a>
            <a className="icons facebook " href="#">
              <Image src={Facebook} height={30} width={30} alt="facebook"/>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
