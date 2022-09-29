import React from 'react';
//
const progressSteps = Array.from(Array(10).keys());
const ProgressSteps = () => {
  return (
    <>
      <div className="container flex items-center justify-center">
        {progressSteps.map((progressStep, index) => {
          return (
            <div className="" key={index}>
              <div className="circle w-2 h-2 border-2 rounded-full flex justify-center items-center"></div>
              {index < progressSteps.length - 1 && (
                <div className="line w-4 h-1 bg-slate-300"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="buttons flex ">
        <div className="prev">
          <button>Prev</button>
        </div>
        <div className="next active-button">
          <button>Next</button>
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;
