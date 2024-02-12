// login.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import LoginImage from '../../assets/loginImage.jpg';
import { useDispatch } from 'react-redux';
import { setEmailValue,setCaptchaEnteredValue } from '../../redux/Reducers';
import RandomCaptcha from './RandomCaptcha';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [activeComponent, setActiveComponent] = useState("login");
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [captcha,setCaptcha]=useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessageCaptcha,setErrorMessageCaptcha]=useState("")

  const dispatch=useDispatch()

  // const [userName,setUserName]=useState("")
  const navigate=useNavigate()

  const handleLogin = () => {

    //api handle here 
    if (captcha===captchaValue){
    dispatch(setEmailValue(email))
    dispatch(setCaptchaEnteredValue(captcha))
    navigate("/home")
    }else{
      setErrorMessageCaptcha("Entered captcha is wrong regenerate ")
      setTimeout(()=>{
        setErrorMessageCaptcha("")
      },3000)
    }
  };

  const handleForgotPassword = () => {
    console.log("handleForgotPassword",activeComponent)
    //handle api here 
    setActiveComponent("reset")
  };
  console.log("captcha",captcha)

  const handleResetPassword = () => {
    if (password.trim() === confirmpassword.trim() && password.trim() !== '') {
      setActiveComponent("login");
    } else {
      setErrorMessage('Passwords do not match. Please try again.');
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleRegenerateCaptcha = () => {
    // Clear the captcha input field when regenerating
    setCaptcha('');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail)
    setIsButtonDisabled(newEmail === '' || password === '');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsButtonDisabled(email === '' || newPassword === '');
  };


  const buttonStyle = {
    opacity: isButtonDisabled ? 0.7 : 1,
  };

  

  // const handleSignUp =()=>{
  //   setPageName("login")
  // }


  const loginPage = () => {
    return(
      <div className='d-flex  justify-content-between align-items-center col-12' style={{height:"100vh"}}>
      <div className='col-8'>
       <img src={LoginImage} alt="login" style={{width:"68.7vw"}}/>
      </div>
     <div className="loginForm">
      <h2 className='ms-4'>Welcome to HRM</h2>
   <form onSubmit={(e) => e.preventDefault()} className='mt-4'>
    <div className='ms-4 mt-4'>
        <label htmlFor="email">Email/Mobile no</label>
       </div>
       <div className='mt-2 ms-4'>
        <input
          type="email"
          className="inputBoxContent"
          value={email} onChange={handleEmailChange} 
          placeholder='Enter your email/mobile no'
        />
        </div>
        <div className='mt-4 ms-4'>
        <label htmlFor="password">Password</label>
        </div>
        <div className='mt-2 ms-4'>
        <input
          type="password"
          className="inputBoxContent"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Enter your password'
        />
        </div>
        <div className='mt-4 ms-4 d-flex'>
        <RandomCaptcha onCaptchaChange={handleCaptchaChange}onRegenerate={handleRegenerateCaptcha} />
       <div className="ms-3">
        <input
          type="text"
          className="captchaBoxContent px-2"
          onChange={(e) => setCaptcha(e.target.value)}
          placeholder="Enter captcha"
          value={captcha}
        />
        </div>
       </div>
        <div style={{color:"red"}} className='ms-4'>
        {errorMessageCaptcha}</div>
         <div className='mt-3 ms-4'>
        <button type="submit" className='loginButton' onClick={handleLogin} disabled={isButtonDisabled} style={buttonStyle}>
          Login
        </button>
        </div>
        <div className='d-flex justify-content-end mt-3 ms-4' style={{width:"25vw"}}>
          <h6>Forgot password?
          <u className='ms-1' style={{color:"blue",cursor:"pointer"}} onClick={()=>setActiveComponent("forgotpassword")}>click here </u> 
          </h6>
          {/* <u style={{color:"blue",cursor:"pointer",marginTop:"-3px"}} onClick={()=>setPageName("signup")}>Sign Up</u> */}
          </div>
        <div className='ms-4 mt-2'>
          <h6 style={{fontSize:"1.1vw"}}>By logging in, you agree to HRM  Terms of Use and Privacy Policy</h6>
        </div>
       
        </form>
      </div>
    </div>
   )
  }


  const ForgotPassword =()=>{
    return (
      <div className='d-flex  justify-content-between align-items-center col-12' style={{height:"100vh"}}>
       <div className='col-4'>
       <img src={LoginImage} alt="login" style={{width:"68.7vw"}}/>
      </div>
     <div className="loginForm">
      <h2 className='ms-4'>Forgot password</h2>
      <div className='ms-4 mt-4'>Enter your email or mobile no for the verification process if email exists we will send you to the reset password page...</div>
   <form onSubmit={(e) => e.preventDefault()} className='mt-4'>
        <div className='mt-4 ms-4'>
        <label htmlFor="password"  style={{fontSize:"1.4vw"}}>Email/Mobile no</label>
        </div>
        <div className='mt-2 ms-4'>
        <input
          type="email"
          className="inputBoxContent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
        </div>
        <div className='mt-4 ms-4'>
        <button type="submit" className='loginButton' onClick={(e)=>
          {
e.preventDefault()
handleForgotPassword()
          }
          }>
          Continue
        </button>
        </div>
        </form>
      </div>
    </div>
    )
  }


  const resetPassword =()=>{
    console.log("active",activeComponent)
    return(
      <div className='d-flex  justify-content-between align-items-center col-12' style={{height:"100vh"}}>
       <div className='col-4'>
       <img src={LoginImage} alt="login" style={{width:"66.7vw"}}/>
      </div>
     <div className="loginForm">
      <h2 className='ms-4'>Reset password</h2>
      <div className='ms-4 mt-3'>Set the new password for your account so you can login and access all the features..</div>
   <form onSubmit={(e) => e.preventDefault()} className='mt-4'>
        <div className='mt-4 ms-4'>
        <label htmlFor="password"  style={{fontSize:"1.4vw"}}>Password</label>
        </div>
        <div className='mt-2 ms-4'>
        <input
          type="password"
          className="inputBoxContent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your new password'
        />
        </div>
        <div className='mt-4 ms-4'>
        <label htmlFor="password" style={{fontSize:"1.4vw"}}>Confirm password</label>
        </div>
        <div className='mt-2 ms-4'>
        <input
          type="password"
          className="inputBoxContent"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Enter your confirm password'
        />
        </div>
        <div className=' mt-1 ms-4'>
        <button type="submit" className='loginButton mt-4' onClick={handleResetPassword}>
          Submit
        </button>
        </div>
        {errorMessage && (
            <div className="mt-2 ms-4 text-danger">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
    )
  }


  // const signUpPage =()=>{
  //   return(
  //     <div className='d-flex  justify-content-between align-items-center col-12 mb-4' style={{height:"100vh",overflow:"hidden"}}>
  //    <div className='col-4'>
  //      <img src={LoginImage} alt="login" style={{width:"880px"}}/>
  //     </div>
  //    <div className="loginForm ms-2">
  //     <h2 className='ms-4'>Welcome to HRM</h2>
  //  <form onSubmit={(e) => e.preventDefault()}>
  //  <div className='ms-4 mt-3'>
  //       <label htmlFor="email">Username</label>
  //      </div>
  //      <div className='mt-1 ms-4'>
  //       <input
  //         type="text"
  //         className="inputBoxContent"
  //         value={userName}
  //         onChange={(e) => setUserName(e.target.value)}
  //         placeholder='Enter your name'
  //       />
  //       </div>
  //   <div className='ms-4 mt-3'>
  //       <label htmlFor="email">Email</label>
  //      </div>
  //      <div className='mt-1 ms-4'>
  //       <input
  //         type="email"
  //         className="inputBoxContent"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         placeholder='Enter your email'
  //       />
  //       </div>
  //       <div className='mt-3 ms-4'>
  //       <label htmlFor="password">Password</label>
  //       </div>
  //       <div className='mt-1 ms-4'>
  //       <input
  //         type="password"
  //         className="inputBoxContent"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         placeholder='Enter your new password'
  //       />
  //       </div>
  //       <div className='mt-3 ms-4'>
  //       <label htmlFor="password">Confirm Password</label>
  //       </div>
  //       <div className='mt-1 ms-4'>
  //       <input
  //         type="password"
  //         className="inputBoxContent"
  //         value={confirmpassword}
  //         onChange={(e) => setConfirmPassword(e.target.value)}
  //         placeholder='Enter your confirm password'
  //       />
  //       </div>
  //       <div className='mt-4 ms-4'>
  //       <button type="submit" className='loginButton' onClick={handleSignUp}>
  //         Signup
  //       </button>
  //       </div>
  //       <div className='d-flex justify-content-between mt-1 ms-4' style={{width:"25vw"}}>
  //         <h6>Already have an account?
  //         <u className='ms-2' style={{color:"blue",cursor:"pointer"}} onClick={()=>setPageName("login")}>login here </u> 
  //         </h6>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  //   )
  // }
 

  return (
 
    <div>
      {activeComponent=== "login" && loginPage()}
      {activeComponent === "forgotpassword" && ForgotPassword()}
      {/* {pageName === "signup" && signUpPage()} */}
      {activeComponent === "reset" && resetPassword()}
      <div>np</div>
    </div>

  );
};

export default Login;
