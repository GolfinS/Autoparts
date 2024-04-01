import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import video from '../Components/Assets/video.mp4';
import logo from '../Components/Assets/nav-logo.svg';
import "./CSS/LoginSignup.css";
import "./CSS/LoginSignups.css";


const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked && state === "Login") {
      alert("Please agree to the terms of use & privacy policy.");
      return;
    }

    let dataObj;
    const endpoint = state === "Login" ? "login" : "signup";

    await fetch(`http://localhost:4000/${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dataObj = data;
      });

    if (dataObj.success) {
      localStorage.setItem("auth-token", dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Create And Sell Extraordinary Product</h2>
            <p>Adopt the pace of nature!</p>
          </div>

          <div className='footerDiv flex'>
            <span class="text">
              {state === "Login" ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button class="btn" onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}>
              {state === "Login" ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='' />
            <h3>{state === "Login" ? "Welcome Back!" : "Create an Account"}</h3>
          </div>

          <form onSubmit={handleSubmit} className='form grid'>

            {state === "Sign Up" && (
              <div className='inputDiv'>
                <label htmlFor='username'>Username</label>
                <div className='input flex'>
                  <FaUserShield className='icon' />
                  <input type='text' id='username' name='username' placeholder='Enter Username' value={formData.username} onChange={changeHandler} />
                </div>
              </div>
            )}

            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input type='email' id='email' name='email' placeholder='Enter Email' value={formData.email} onChange={changeHandler} />
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='password' name='password' placeholder='Enter Password' value={formData.password} onChange={changeHandler} />
              </div>
            </div>

            {state === "Login" && (
              <div className='loginsignup-agree'>
                <input type='checkbox' id='terms' checked={isChecked} onChange={handleCheckboxChange} />
                <label htmlFor='terms'>I agree to the terms of use & privacy policy.</label>
              </div>
            )}

            <button type='submit' className='btn flex'>
              <span>{state === "Login" ? "Login" : "Sign Up"}</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            {state === "Login" && (
              <span className='forgotPassword'>
                Forgot your password? <Link to='/forgot-password'>Click Here</Link>
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
