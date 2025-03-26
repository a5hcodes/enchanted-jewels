import SignupForm from '../Components/SignupForm';
import React from 'react';
import Navbar from '../Components/Navbar';

const Signup = () => {
  return (
    <div>
      <Navbar logo="EnchantedJewels" products="Products" login="Login"/>
      <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="signup" />
      <SignupForm />
    </div>
  )
};
export default Signup;
