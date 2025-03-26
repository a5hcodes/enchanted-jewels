import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
                    {props.logo}
                </Link>
                
                <div className="flex space-x-6">
                    <Link 
                        to="/products" 
                        className="text-gray-800 font-semibold hover:text-gray-600 transition duration-300"
                    >
                        {props.products}
                    </Link>
                    <Link 
                        to="/login" 
                        className="text-gray-800 font-semibold hover:text-gray-600 transition duration-300"
                    >
                        {props.login}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;