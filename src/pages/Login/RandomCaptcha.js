import React, { useState, useEffect } from 'react';
import { IoReloadSharp } from "react-icons/io5";

const generateRandomString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 6;

  let captcha = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
  }

  return captcha;
};

const RandomCaptcha = ({ onCaptchaChange, onRegenerate }) => {
  const [captcha, setCaptcha] = useState(generateRandomString());

  useEffect(() => {
    onCaptchaChange(captcha);
  }, [captcha, onCaptchaChange]);

  const regenerateCaptcha = () => {
    setCaptcha(generateRandomString());
    onRegenerate();
  };

  return (
    <div>
      <div id="captcha"  style={{
    fontSize: '1.6vw',
    fontWeight: 'bold',
    padding: '10px',
    color:"pink",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }} className='p-2'>
        {captcha}
      </div>
      <IoReloadSharp onClick={regenerateCaptcha} style={{height:"35px",width:"35px"}} className='ms-2' />
    </div>
  );
};

export default RandomCaptcha;