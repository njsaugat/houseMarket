import React, { createContext, useRef, useState } from 'react';
// import Banner from '../components/Banner';
import Final from './Final';
import Intro from './Intro';
import Mid from './Mid';
import PrevNext from './PrevNext';
import ProgressSteps from './ProgressSteps';
import Axios from 'axios';

export const FormContext = createContext();
const formItems = [<Intro />, <Mid />, <Final />];
const RegisterProperty = () => {
  const [step, setStep] = useState(0);

  const [rentClicked, setRent] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const previewImage = useRef(null);
  // const [name,setName]=useState('')
  const [formState, setState] = useState({
    name: '',
    imageUrl: '',
    bedrooms: '',
    livingRooms: '',
    bathrooms: '',
    price: '',
    address: '',
    description: '',
  });

  function submit(e) {
    e.preventDefault();
    Axios.post('http://localhost:5000/formdata', {
      formState,
    }).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        formState,
        setState,
        rentClicked,
        setRent,
        isFurnished,
        setIsFurnished,
        previewImage,
        showImage,
        setShowImage,
      }}
    >
      <div className=" bg-gradient-to-r from-gray-200 to-gray-50 h-screen">
        {/* @TODO: add Navbar here  */}
        <h1 className="text-2xl font-bold text-center tracking-wider py-5 ">
          Register your property at GharShar
        </h1>
        <div className="left py-10">
          <ProgressSteps step={step} setStep={setStep} />
        </div>
        {/* <form action="" className="flex justify-center "> */}
        <form className="flex justify-center " onSubmit={submit}>
          <div className="right bg-white flex flex-col items-center justify-center shadow-lg rounded-2xl border-slate-0 border-2 w-11/12 md:w-4/5 lg:w-1/2 transition-all">
            {formItems.map((FormItem, index) => {
              return index === step && FormItem;
            })}
          </div>
        </form>
        {/* <PrevNext step={step} setStep={setStep} /> */}
      </div>
    </FormContext.Provider>
  );
};

export default RegisterProperty;
