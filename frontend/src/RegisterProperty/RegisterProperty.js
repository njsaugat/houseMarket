import React, { useState } from 'react';
import Final from './Final';
import Intro from './Intro';
import Mid from './Mid';
import PrevNext from './PrevNext';
import ProgressSteps from './ProgressSteps';

const formItems = [<Intro />, <Mid />, <Final />];
const RegisterProperty = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="font-poppins">
      <div className="left my-10">
        <ProgressSteps step={step} setStep={setStep} />
      </div>
      <form action="" className="flex justify-center">
        <div className="right flex flex-col items-center justify-center shadow-lg rounded-2xl border-slate-0 border-2 w-11/12 md:w-4/5 lg:w-1/2">
          {formItems.map((formItem, index) => {
            return index === step && formItem;
          })}
          {/* <Intro /> */}
          {/* <Mid /> */}
          {/* <Final /> */}
        </div>
      </form>
      <PrevNext step={step} setStep={setStep} />
    </div>
  );
};

export default RegisterProperty;
