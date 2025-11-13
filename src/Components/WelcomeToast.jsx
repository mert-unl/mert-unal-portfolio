import React, { useEffect, useState } from 'react';

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
    <div className={`${flag ?"display:none hidden transition-all duration-300 " :"fixed inset-0 flex flex-col items-center justify-center z-[1000] bg-black transition-all duration-300 " }`}>
     
         <img src="/morpheus.jpg"   className="transform scale-x-[-1]"
/>

      <div className="bg-black/20 text-white rounded-xl shadow-xl fixed  p-12 flex flex-col mb-25 items-center gap-10 max-w-sm w-full">
        <p className="text-md font-medium text-center"> <span className='text-3xl'>Merhaba!</span><br></br>
         {city ? ` Hmm demek ${city}, orada durumlar nasıl?` : "Konum alınıyor..."}
        </p>
        <p className="text-center text-3xl py-2 bg-black/60 mt-40 font-medium">Beni işe alacak mısın?</p>

        <div className="flex flex-row gap-4  mt-4">
          <button onClick={acceptClick} className="bg-gray-900   rounded-lg  text-4xl hover:bg-blue-700 text-white hover:scale-125 font-semibold px-6 py-4  transition-all">
            Evet
          </button>
           <a className='bg-red-900  rounded-lg  hover:bg-black/0 hover:text-black text-lg font-medium inline-flex   items-center   text-white font-semibold px-4  transition-all' href="https://www.youtube.com/shorts/obstE9szqV0">
      <p className='text-center'> Hayır </p> 
        </a> 


        </div>
      </div>
    </div>
  );
}

export default WelcomeToast;
