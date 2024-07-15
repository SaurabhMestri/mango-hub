import Image from "next/image";
import React, { useState } from "react";
import Google from "@/public/images/google.png";
import Facebook from "@/public/images/facebook.png";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Login = (props: Props) => {
  const [action, setAction] = useState("Login");

  return (
    <motion.div className="container">
      <div className="login-container">
        <form action="#" method="POST" className="login-form">
          <h2>{action}</h2>
          <div className="form-group">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div>
                <label>Name</label>
                <input
                  placeholder="Enter Your name"
                  type="text"
                  id="Name"
                  name="Name"
                  required
                />
              </div>
            )}
          </div>
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
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forget">
              <a href=""> Forget Password?</a>
            </div>
          )}

          <button
            className={action === "Sign Up" ? "btn" : "btn"}
            onClick={() => {
              setAction("Login");
            }}
            type="submit"
          >
            Login
          </button>
          <Link href={""}>
            <button
              className={action === "Login" ? "btn" : "btn"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </button>
          </Link>
          {action==="Sign Up"?<div></div>: <div className="social-icons-btn">
            <a className="icons google" href="#">
              <Image src={Google} height={30} width={30} alt="google" />
            </a>
            <a className="icons facebook " href="#">
              <Image src={Facebook} height={30} width={30} alt="facebook" />
            </a>
          </div>}
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
