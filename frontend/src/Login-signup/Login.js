import React, { useRef } from 'react';
import Banner from '../components/Banner';
import Tagline from '../components/Tagline';
import login from '../login.png';
import Axios from 'axios';
import validator, { checkEmail, checkPassword } from './validator';
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    // const
    Axios.post('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'mutlipart/form-data',
      },
      body: {
        email: email.current.value,
        password: password.current.value,
      },
    });
    //@TODO add promises to check whether the user is genuine or not based on response from server
  };
  return (
    <div className=" flex flex-col md:flex-row  w-screen h-screen min-h-screen">
      <div className="hidden w-auto md:flex flex-col items-center  justify-center  bg-gradient-to-r from-blue-300  ">
        <Banner />
        <Tagline />
        <img src={login} alt="" srcSet="" />
      </div>
      <div
        className=" 
     flex  flex-col  self-center  justify-center items-center w-full md:w-1/2   h-full md:pl-20 "
      >
        <div className="flex fixed -top-5 md:hidden">
          <Banner />
        </div>
        <h1 className="text-2xl font-bold mt-20 tracking-wider ">
          Login to GharShar
        </h1>
        <form
          className="p-7 md:p-10  m-2 w-10/12 md:w-full   flex flex-col justify-center items-center"
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="option flex flex-col my-5 self-center w-full lg:w-10/12">
            <label className="font-bold tracking-wider mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="border-gray-300 border-0 shadow-md bg-gray-100 w-full   rounded-lg  px-3 py-2 outline-0 "
              type="email"
              name="email"
              ref={email}
              onChange={(e) => {
                checkEmail(email);
              }}
            />
          </div>
          <div className="option flex flex-col my-5 self-center w-full lg:w-10/12">
            <label className="font-bold tracking-wider mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="border-gray-300 border-0 shadow-md bg-gray-100 w-full   rounded-lg  px-3 py-2 outline-0 "
              type="password"
              name="password"
              ref={password}
              onChange={(e) => {
                checkPassword(password);
              }}
            />
          </div>

          <button
            className="py-3 my-5 px-5 outline-0 w-full lg:w-10/12  bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black"
            type="submit"
            onClick={(e) => {
              // e.preventDefault();
              validator(e, email.current, password.current);
            }}
          >
            Sign In
          </button>
          <p className="mt-4">Not a member? Sign Up</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
