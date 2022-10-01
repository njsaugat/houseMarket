import React, { useRef } from 'react';
import Banner from '../components/Banner';
import Tagline from '../components/Tagline';
import loginHouse from '../loginHouse.png';
import validator, {
  checkConfPassword,
  checkEmail,
  checkPassword,
} from './validator';
import { checkUsername } from './validator';
const Signup = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confPassword = useRef(null);
  const checkbox = useRef(null);

  return (
    <div className=" flex flex-col md:flex-row  w-screen h-screen min-h-screen">
      <div className="hidden w-auto md:flex flex-col items-center  justify-center  bg-gradient-to-r from-sky-300  ">
        <Banner />
        <Tagline />
        <img src={loginHouse} alt="" srcSet="" />
      </div>
      <div
        className=" 
     flex  flex-col  self-center  justify-center items-center w-full md:w-1/2   h-full md:pl-20 "
      >
        <div className="flex fixed -top-5 md:hidden">
          <Banner />
        </div>
        <h1 className="text-2xl font-bold mt-20  ">Sign Up to GharShar</h1>
        <form className="p-7 md:p-10  m-2 w-10/12 md:w-full   flex flex-col justify-center items-center">
          <div className="flex gap-x-5 justify-between w-full lg:w-10/12">
            <div className="option flex flex-col my-5 self-center  w-1/2 ">
              <label
                className="font-bold tracking-wider mb-1"
                htmlFor="name"
              ></label>
              <input
                className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
                type="text"
                name="name"
              />
            </div>
            <div className=" option flex flex-col my-5 self-center  w-1/2 ">
              <label
                className="font-bold tracking-wider mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border-gray-300 border-0 shadow-md bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
                type="text"
                name="username"
                ref={username}
                onChange={(e) => {
                  checkUsername(username);
                }}
              />
            </div>
          </div>
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
          <div className="option  flex flex-col my-5 self-center w-full lg:w-10/12">
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
          <div className="option flex flex-col my-5 self-center w-full lg:w-10/12">
            <label
              className="font-bold tracking-wider mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border-gray-300 border-0 shadow-md bg-gray-100 w-full   rounded-lg  px-3 py-2 outline-0 "
              type="password"
              name="confirmPassword"
              ref={confPassword}
              onChange={(e) => {
                checkConfPassword(confPassword);
              }}
            />
          </div>
          <div className=" flex align-items my-3 self outline-0-center w-full lg:w-10/12 ">
            <label htmlFor="tac">
              <input
                id="tac"
                type="checkbox"
                name="terms-and-conditions"
                className="w-4 h-4"
                ref={checkbox}
              />
              I agree to the Terms and Conditions.
            </label>
          </div>
          <button
            className="py-3 px-5 outline-0 w-full lg:w-10/12  bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black"
            type="submit"
            onClick={(e) => {
              // e.preventDefault();
              validator(
                e,
                username.current,
                email.current,
                password.current,
                confPassword.current,
                checkbox.current
              );
            }}
          >
            Sign Up
          </button>
          <p className="mt-4">Already a member? Sign In</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
