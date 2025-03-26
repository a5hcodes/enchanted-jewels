import LoginForm from '../Components/LoginForm';
import React from 'react';
import Navbar from '../Components/Navbar';

const Login = () => {
    return (
        <div>
          <Navbar logo="EnchantedJewels" products="Products" login="Login"/>
         <img src="https://via.placeholder.com/150"></img>
         <LoginForm />

        </div>
    )
}
export default Login;