import React from 'react'
import { ContactFooter } from '../Components/Contact';

function Footer() {
const year = new Date().getFullYear();


  return (
    <div className='flex flex-col flex-col text-white  w-full h-80 bg-black/90 text-center align-middle justify-center '>         
   
      <div className="flex flex-row justify-center  py-4 gap-4" >

           <ContactFooter logo=" src/assets/linkedIn.png" name="Linkedin" link="https://www.linkedin.com/in/mert-%C3%BCnal/" />

           <ContactFooter logo=" src/assets/gitHub.png" name="GitHub" link="https://www.linkedin.com/in/mert-%C3%BCnal/" />

      </div>
           <p className="text-green-200 shadow-sm  text-center  shadow-green-800 "> 
         <a href="mailto:mertunal1998@gmail.com?subject=İş%20Fırsatı&body=Merhaba%20Mert," target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-xl  hover:scale-115 transition-all duration-500">
          mertunal1998@gmail.com
        </a>
      </p>
  <p className="text-center text-md  md:text-lg px-8 py-10">Bu portfolyö sitesi  <span className='underline'>Mert ÜNAL</span> tarafından yapılmıştır.<br></br>  © {year} Tüm hakları saklıdır.</p>

    
    </div>
  )
}

export default Footer