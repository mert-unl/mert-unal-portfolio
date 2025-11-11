import React, { useEffect, useState } from 'react';
import BackgroundMusic from './BackgroundMusic';

function WelcomeToast() {

  const [city, setCity] = useState(null);

  const [flag,setFlag] = useState(false)

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setCity(data.city))
      .catch(() => setCity("VPN kullanıyorsun"));
  }, []);

      

function acceptClick(){
     setFlag(true)    
}
 

  return (
    <div className={`${flag ?"display:none hidden " :"fixed inset-0 flex items-center justify-center z-[1000] bg-black/97"}`}>
      <div className="bg-black text-white rounded-xl shadow-xl border-1 border-gray-400 p-12 flex flex-col items-center gap-6 max-w-sm w-full">
        <p className="text-md font-medium text-center">Merhaba!<br></br>
         {city ? ` Hmm demek ${city}, orada havalar nasıl? Umarım iyidir.` : "Konum alınıyor..."}
        </p>
        <p className="text-center text-3xl py-2 font-medium">Beni işe alacak mısın?</p>

        <div className="flex flex-row gap-6  mt-4">
          <button onClick={acceptClick} className="bg-gray-900   rounded-lg  text-4xl hover:bg-blue-600 text-white hover:scale-125 font-semibold px-6 py-4  transition-all">
            Evet
          </button>
           <a className='bg-red-900  rounded-lg  hover:bg-black hover:text-black text-sm inline-flex   items-center   text-white font-semibold px-4  transition-all' href="https://www.youtube.com/shorts/obstE9szqV0">
      <p className='text-center'> Hayır </p> 
        </a> 


        </div>
      </div>
    </div>
  );
}

export default WelcomeToast;
