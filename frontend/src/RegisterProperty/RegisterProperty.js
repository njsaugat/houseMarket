import React, { createContext, useState } from 'react';
import Banner from '../components/Banner';
import Final from './Final';
import Intro from './Intro';
import Mid from './Mid';
import PrevNext from './PrevNext';
import ProgressSteps from './ProgressSteps';

export const FormContext = createContext();
const formItems = [<Intro />, <Mid />, <Final />];
const RegisterProperty = () => {
  const [step, setStep] = useState(0);

  // const [name,setName]=useState('')
  const [formState, setState] = useState({
    name: '',
    propertyType: '',
    imageUrl: '',
    bedrooms: '',
    livingRooms: '',
    bathrooms: '',
    furnished: '',
    price: '',
    address: '',
    description: '',
  });

  return (
    <FormContext.Provider value={{ step, setStep }}>
      <div className=" bg-gradient-to-r from-gray-200 to-gray-50 h-screen">
        {/* @TODO: add Navbar here  */}
        <h1 className="text-2xl font-bold text-center tracking-wider py-5 ">
          Register your property at GharShar
        </h1>
        <div className="left py-10">
          <ProgressSteps step={step} setStep={setStep} />
        </div>
        {/* <form action="" className="flex justify-center "> */}
        <div className="flex justify-center ">
          <div className="right bg-white flex flex-col items-center justify-center shadow-lg rounded-2xl border-slate-0 border-2 w-11/12 md:w-4/5 lg:w-1/2 transition-all">
            {formItems.map((FormItem, index) => {
              return index === step && FormItem;
            })}
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default RegisterProperty;
