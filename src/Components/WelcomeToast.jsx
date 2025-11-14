import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContextProvider';

function WelcomeToast() {

  const [city, setCity] = useState(null);

  const [questionFlag,questionSetFlag] = useState(false)
  const [langFlag,setLangFlag] = useState(true)




const {lang,setLang,langData} = useContext(AppContext)

const welcome = langData.welcomeToast





  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setCity(data.city))
      .catch(() => setCity("VPN kullanıyorsun"));
  }, []);

      

function onAcceptClick(){
     questionSetFlag(true)    
}

function trhandle(){
  setLang("tr") 
  setLangFlag(false)
}

function enhandle(){
  setLang("en") 
  setLangFlag(false)
}
 

  return (

        
  
      <div className={`${questionFlag ?"display:none hidden " :"fixed inset-0 flex flex-col items-center justify-center z-[1000] bg-black " }`}>
      
          <img src="/morpheus.jpg"   className="transform  flex fixed top-50-100 left-50-100 -z-100 scale-x-[-1]"
  />


        <div className={`${langFlag ? 'text-white flex flex-row  mt-20  gap-4 text-2xl':"display:none hidden "}`}> 
        <button  className='font-bold text-4xl  bg-red-600 rounded-md p-4' onClick={trhandle}
          >TR</button>
        <button  className='font-bold  text-4xl  bg-blue-600 rounded-md p-4' onClick={enhandle} >EN</button>
        </div>

        <div className={`${!langFlag ? "bg-black/20 text-white rounded-xl shadow-xl fixed  p-12 flex flex-col mb-35 items-center gap-10 max-w-sm w-full" : "display:none hidden"}`}>
          <p className="text-md font-medium text-center"> <span className='text-3xl'>{welcome.hello}</span><br></br>
          {city ? ` Hmm demek ${city}, orada durumlar nasıl?` : "Konum alınıyor..."}
          </p>
          <p className="text-center text-2xl mt-40 md:text-3xl py-2 bg-black/60 md:mt-30 font-medium">{welcome.question}</p>

          <div className="flex flex-row gap-4  mt-4">
            <button onClick={onAcceptClick} className="bg-gray-900   rounded-lg  text-4xl hover:bg-blue-600 text-white hover:scale-255 font-semibold px-6 py-4  duration-500 transition-all">
              {welcome.yes}
            </button>
            
            <a className='bg-red-900  rounded-lg  hover:bg-black/0 hover:text-black text-lg font-medium inline-flex   items-center   text-white font-semibold px-4  transition-all' href="https://www.youtube.com/shorts/obstE9szqV0">
              <p className='text-center'>{welcome.no} </p> 
            </a>
          </div>

        </div>
      </div>

  );
}

export default WelcomeToast;
