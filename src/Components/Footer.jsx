import React from 'react'
import { ContactFooter } from '../Components/Contact';

function Footer() {
const year = new Date().getFullYear();


  return (
    <div className='flex flex-col text-white border-t-green-800/90  mt-15 border-t-1 w-full h-100 bg-black/90 text-center align-middle justify-center '>         
   
         <h3 className='mt-5  text-2xl py-2 md:text-4xl md:py-4 text-center'>İletişime geç!</h3>

      <div className="flex flex-row justify-center  py-4 gap-4" >

           <ContactFooter logo="/assets/linkedIn.png" name="Linkedin" link="https://www.linkedin.com/in/mert-%C3%BCnal/" />

           <ContactFooter logo=" /assets/gitHub.png" name="GitHub" link="https://www.linkedin.com/in/mert-%C3%BCnal/" />

      </div>
           <p className="text-green-200 shadow-sm  text-center  shadow-green-800 "> 
         <a href="mailto:mertunal1998@gmail.com?subject=İş%20Fırsatı&body=Merhaba%20Mert," target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-xl  hover:scale-115 transition-all duration-500">
          mertunal1998@gmail.com
        </a>
      </p>
  <p className="text-center px-8 mt-10">Bu portfolyö sitesi  <span className='underline'>Mert ÜNAL</span> tarafından yapılmıştır.<br></br>  © {year} Tüm hakları saklıdır.</p>

    
    </div>
  )
}

export default Footer