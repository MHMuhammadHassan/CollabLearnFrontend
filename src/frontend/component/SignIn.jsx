// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/facebook_icon.png';
import google from '../../assets/google_original_icon.png';
import ln from '../../assets/linkedin_icon.png';
import logo from '../../assets/Logo.png';

export function SignIn() {
  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">
      <div className="flex flex-col flex-1 bg-gray-50 justify-center items-center p-4">
        <div className="mb-8">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">Sign in to CollabLearn</h1>
          <div className="flex justify-center mb-4">
            <img src={fb} alt="" className="w-8 h-8 mx-2" />
            <img src={google} alt="" className="w-8 h-8 mx-2" />
            <img src={ln} alt="" className="w-8 h-8 mx-2" />
          </div>
          <p className="text-gray-600 mb-4">or use your email account</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-80 p-2 mb-4 border border-indigo-600 rounded-full bg-gray-200"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full md:w-80 p-2 mb-4 border border-indigo-600 rounded-full bg-gray-200"
          />
          <p className="text-gray-600 mb-4">Forget your Password?</p>
          <Link to="/Home">
            <button className="w-full md:w-40 py-2 mb-4 bg-indigo-600 text-white rounded-full hover:bg-transparent hover:text-indigo-600 border border-indigo-600 transition duration-300">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-gradient-to-r from-indigo-600 to-indigo-400 justify-center items-center text-center p-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Don’t Have an Account?</h1>
        <h2 className="text-2xl font-semibold mb-4">Join Us Now</h2>
        <p className="text-lg mb-8">Enter your details and start your learning journey with us</p>
        <Link to="/SignUp">
          <button className="w-full md:w-40 py-2 border border-white rounded-full text-indigo-600 hover:bg-white hover:text-indigo-600 transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
