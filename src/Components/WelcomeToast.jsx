import React, { useEffect, useState } from 'react';

function WelcomeToast() {

  const [city, setCity] = useState(null);


  useEffect(() => {
    // Kullanıcının IP ve şehrini al
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setCity(data.city))
      .catch(() => setCity("VPN kullanıyorsun"));
  }, []);



  return (
    <div className="fixed inset-0 flex items-center justify-center    z-[1000]">
      <div className="bg-black text-white rounded-xl shadow-xl border-1 border-gray-400 p-8 flex flex-col items-center gap-6 max-w-sm w-full">
        <p className="text-lg font-medium text-center">Merhaba!<br></br>
         {city ? ` Hmm demek ${city}, orada havalar nasıl? Umarım iyidir.` : "Konum alınıyor..."}
        </p>
      
        <p className="text-center">Beni işe alacak mısın?</p>

        <div className="flex flex-row gap-4  mt-4">
          <button className="bg-gray-900  text-4xl hover:bg-green-800 text-white hover:scale-120 font-semibold px-6 py-2 rounded-lg transition-all">
            Evet
          </button>
          <button className="bg-red-900 hover:bg-black hover:text-black text-md   text-white font-semibold px-6 py-2 rounded-lg transition-all">
            Hayır
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeToast;
