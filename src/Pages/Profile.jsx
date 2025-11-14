import React, { useContext } from 'react'
import { ContactHero } from '../Components/Contact';
import { AppContext } from '../context/AppContextProvider';

function Profile() {


   const {langData} = useContext(AppContext)
  const about = langData.aboutSection

  return (
    <section  className="flex flex-col gap-10 md:gap-20 ">

      <img
        className="w-full h-52 md:h-170 rounded-xl border border-green-900/30 object-cover 
        shadow-green-700"
        alt="Mert Ünal"
        src="https://picsum.photos/id/1045/3200/3200"
    
      />

      <div id="aboutme"
        className="scroll-mt-25 md:scroll-mt-35 flex flex-col gap-6 text-center  bg-gray-900/30 backdrop-blur-sm
        text-green-50 text-sm md:text-lg leading-relaxed
        rounded-2xl p-6 md:py-10 md:px-18  shadow-green-700 border border-green-500/20"
      >

        <h2
          className="text-4xl md:text-7xl font-bold text-green-100 drop-shadow-green-400
          tracking-tight"
        >
         {about.title}
        </h2>
            {about.texts.map((item,index)=>(
               <p key={index}>{item}</p>
            ))}
   
        

        <p className="font-semibold text-green-200 mt-6 md:text-xl drop-shadow-md">{about.lastWord}</p>
    
          <div className='flex flex-row justify-between gap-5 md:gap-24 md:mt-12'>
           <ContactHero logo=" /assets/linkedIn.png" name="LinkedIn" link="https://www.linkedin.com/in/mert-%C3%BCnal/" />
                <ContactHero logo=" /assets/gitHub.png" name="GitHub" link="https://github.com/mert-unl" />
           <ContactHero logo=" /assets/gmail.png" name="Gmail"  link="mailto:mertunal1998@gmail.com?subject=İş%20Fırsatı&body=Merhaba%20Mert,"/>


          </div>
        
      </div>
    </section>
  );
}

export default Profile;

