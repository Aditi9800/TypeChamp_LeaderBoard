import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../assets/API/API_URL";
import iconimage from '../../assets/Rectangle_11.png';
import logo from '../../assets/logo.png';
import './Signup.css';


export default function Signup() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
      e.preventDefault();
      if(password.current.value !== passwordAgain.current.value)
      {
        // password.current.setCustomValidity("Password doesn't match!")
        alert("Password doesn't match");
      }
      else
      {
        const userCredential = {
          name : username.current.value,
          email : email.current.value,
          password : password.current.value
        }
        try{
          await axios.post(API_URL+"/auth/signup",userCredential);
          navigate("/login")
        }catch(err){
          console.log(err);
        }
        
      }
  }

  return (
    <div>
      <div className="SignupPage">
        <Link className="" to="/">
          <img src={logo} alt="" className="logo-img" />
        </Link>
        <div className="SignupContain">
          <div className="backgroundSignup">
            <form onSubmit={handleSubmit} className="SignupForm"> 
            <div className="SignFormContainer">
              <div className="SignFormContainerLeft">
                <h1 className="SignWelcome">Create Account</h1>
                <p className="SignQuotation">Create a account for playing a game.</p>
                <div className="SignhtmlForm-group">
                  <label htmlFor="exampleInputEmail1" className="SigninputLabel">UserName</label>
                  <input
                    type="text"
                    className="Signinput"
                    aria-describedby="emailHelp"
                    placeholder="Enter Username"
                    name="name"
                    required
                    ref = {username}
                  />
                
                </div>
                <div className="SignhtmlForm-group">
                  <label htmlFor="exampleInputEmail1" className="SigninputLabel">Email</label>
                  <input
                    type="email"
                    className="Signinput"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    name="email"
                    required
                    ref = {email}
                  />
                  
                </div>
                <div className="SignhtmlForm-group">
                  <label htmlFor="exampleInputPassword1" className="SigninputLabel">Password</label>
                  <input
                    type="password"
                    className="Signinput"
                    placeholder="Enter Password"
                    name="password"
                    required
                    ref = {password}
                  />
                </div>
                <div className="SignhtmlForm-group">
                  <label htmlFor="exampleInputPassword1" className="SigninputLabel">Confirm Password</label>
                  <input
                    type="password"
                    className="Signinput"
                    placeholder="Re-enter Password"
                    name="password"
                    required
                    ref = {passwordAgain}
                  />
                </div>
                <button type="submit" className="SignupFormButton">  
                  SIGN UP
                </button>
              </div>
              <div className="SignFormContainerRight">
                <div className="SignButtonGroup">
                  <h4 className="SignNoAccount">Already have any account?</h4>
                  <span>
                    <Link to="/Login" className="SignupFormLogin">
                      LOG IN
                    </Link>
                  </span>
                </div>
                <img src={iconimage} alt="image" className="SignImage"/>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
