import React, { createContext, useEffect, useRef, useState } from 'react';
// import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import Final from './Final';
import Intro from './Intro';
import Mid from './Mid';
// import PrevNext from './PrevNext';
import ProgressSteps from './ProgressSteps';
import Axios from 'axios';
import Loading from '../components/Loading';
export const FormContext = createContext();
const formItems = [<Intro />, <Mid />, <Final />];
const RegisterProperty = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [userData, setUserData] = useState({});
  const [rentClicked, setRent] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const previewImage = useRef(null);
  const inputImageFile = useRef(null);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState({ preview: '', data: '' });
  const [isLoading, setLoading] = useState(true);
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
    image: '',
  });
  // const [userId, setUserId] = useState('');

  useEffect(() => {
    // const userID = localStorage.getItem('userId');
    // setUserId(userID);
    // console.log('user id is ' + userId);
    async function getUserData() {
      const data = await fetch('/register-property');
      const uData = await data.json();
      console.log(uData);
      setUserData(uData);
      setLoading(false);
      // return uData;
    }

    // setUserData(getUserData());
    getUserData();

    // if (items) {
    //  setItems(items)
    // }
  }, []);

  console.log(Object.keys(userData).length === 0);
  if (isLoading) {
    // return navigate('/loading');
    return <Loading />;
  }
  if (!userData.loggedIn) {
    return navigate('/login');
  }

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', image.data, image.data.name);

    console.log(image.data);
    Axios.post('/formdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'mutlipart/form-data',
      },
      body: {
        ...formState,
        rent: rentClicked,
        furnished: isFurnished,
        userId: userData.userId,
      },
    });
    Axios.post('/formdata', formData).then((res) => console.log(res));

    navigate('/loading');
    setTimeout(() => {
      navigate('/');
    }, 2000);
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
        inputImageFile,
        image,
        setImage,
        // selectedImage,setSelectedImage
      }}
    >
      <div className=" bg-gradient-to-r from-gray-200 to-gray-50 h-screen">
        {/* //@TODO: add Navbar here  */}
        <h1 className="text-2xl font-bold text-center tracking-wider py-5 ">
          Register your property at GharShar
        </h1>
        <div className="left py-10">
          <ProgressSteps step={step} setStep={setStep} />
        </div>
        {/* <form action="" className="flex justify-center "> */}
        <form
          className="flex justify-center "
          onSubmit={(e) => submit(e)}
          encType="multipart/form-data"
        >
          <>
            {formItems.map((FormItem, index) => {
              return (
                index === step && (
                  <div
                    key={index}
                    className="right bg-white flex flex-col items-center justify-center shadow-lg rounded-2xl border-slate-0 border-2 w-11/12 md:w-4/5 lg:w-1/2 transition-all"
                  >
                    {FormItem}
                  </div>
                )
              );
            })}
          </>
        </form>
        {/* <PrevNext step={step} setStep={setStep} /> */}
      </div>
    </FormContext.Provider>
  );
};

export default RegisterProperty;
