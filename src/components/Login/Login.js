import React, { useState } from "react";
import "./Login.css";
import logoImg from '../Images/react.png';
import { useHistory } from "react-router-dom";

const Login = () => {

  const [enteredValue, setEnteredValue] = useState({
    enteredUserName: "",
    enteredUserEmail: "",
    enteredPassword: ""
  })

  const onChangeHandler = (e) => {
    setEnteredValue({ ...enteredValue, [e.target.name]: e.target.value });
  }

  let history = useHistory();

  const formSubmitHandler = () => {
    history.push("/data");
    console.log(enteredValue);
    localStorage.setItem('dataValue', JSON.stringify(enteredValue));
  }

  return (
    <div >
      <div className="bodyBox">
        <div className="center">
          <div className="loginLogoImage">
            <img src={logoImg} alt="logo" />
          </div>
          <form method="post" onSubmit={formSubmitHandler}>
            <div className="txt_field">
              <input type="text" name="enteredUserName" onChange={onChangeHandler} required/>
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="email" name="enteredUserEmail" onChange={onChangeHandler} required/>
              <span></span>
              <label>Useremail</label>
            </div>
            <div className="txt_field">
              <input type="password" name="enteredPassword" onChange={onChangeHandler} required/>
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <div className="loginFormButton">
            <button>
              Login
            </button>
            </div>
            <div className="signup_link">
              Not a member? <a href="#">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
