// import MoodIcon from '@mui/icons-material/Mood';
// import CircularProgress from '@mui/material/CircularProgress';
// import SyncIcon from '@mui/icons-material/Sync';
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import iconimage from '../../assets/Rectangle_11.png';
import logo from '../../assets/logo.png';
import { AuthContext } from "../../context/AuthContext";
import './Login.css';

export default function Login() {
  // const [credentials,setcredentials]=useState({});
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const em = email.current.value;
    const p = password.current.value;
    loginCall({email:em,password:p},dispatch);
  }

  return (
    <div>
      <div className="LoginPage">
        <Link className="" to="/">
          <img src={logo} alt="" className="logo-img" />
        </Link>
        <div className="Logincontain">
          <div className="backgroundLogin">
            <form onSubmit={handleSubmit} className="LoginForm">
            <div className="FormContainer">
              <div className="FormContainerLeft">
                <h1 className="Welcome">Welcome Back!</h1>
                <h4 className="Quotation">Glad to see you again😊</h4>
                <div className="htmlForm-group">
                  <label htmlFor="exampleInputEmail1" className="inputLabel">Email</label>
                  <input
                    type="email"
                    className="input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    name="email"
                    ref = {email}
                    // onChange={onChange}
                  />
                </div>
                <div className="htmlForm-group">
                  <label htmlFor="exampleInputPassword1" className="inputLabel">Password</label>
                  <input
                    type="password"
                    className="input"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    name="password"
                    ref = {password}
                    // onChange={onChange}
                  />
                </div>
                <button className='LoginFormButton' disabled={isFetching}>{isFetching? "loading" : "Log In"}</button>
              </div>
              <div className="FormContainerRight">
                <div className="LoginButtonGroup">
                  <h4 className="NoAccount">Doesn't have any account?</h4>
                  <span>
                    <Link to="/Signup" className="LoginFormSign">
                      SIGN UP
                    </Link>
                  </span>
                </div>
                <img src={iconimage} alt="image" className="LoginImage"/>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
