import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContextProvider';

function Navigation() {
  const [menu, setMenu] = useState(false);
const {lang,setLang,langData} = useContext(AppContext)


const navs = langData.navSection

const navClass =
    "text-xl text-center align-center transition-all animate-blink rounded-3xl py-2 hover:px-6 hover:mx-10 hover:shadow-md hover:shadow-green-400 duration-600 transform-all hover:scale-130  hover:font-semibold";


function handleNav(route){
      document.getElementById(route).scrollIntoView({ behavior: "smooth" });

}

function handleNavMobile(route){
  setMenu(false)
      document.getElementById(route).scrollIntoView({ behavior: "smooth" });

}

 function handleChange(){
      lang === "tr" ? setLang("en") : setLang("tr")
 }

  return (
    <div className="navbar bg-black w-screen shadow-2xl  shadow-green-700 md:shadow-green-900 py-5 px-5 md:py-10 md:px-12 fixed z-5 top-0 left-0 md:justify-center">

      <div className="md:hidden relative  mt-1 ">
          <button
            onClick={() => setMenu(!menu)}
            className="text-white  shadow-green-700 animate-blink shadow-md rounded-sm  btn btn-ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h12" />
            </svg>
          </button>

          {menu && (
            <ul className="absolute mt-2 w-40 bg-black text-green-100 animate-blink rounded-box p-2 shadow-lg border rounded-md border-green-800">
              { navs.map((item,index)=>( <li><button key={index} onClick={()=>handleNavMobile(item.id)} className={navClass} to="/projects">{item.name}</button> </li>)) }
            </ul>
          )}
      </div>


         {/*adım*/}
         <div className='text-white flex md:top-8  top-4  md:left-12 left-38   fixed flex-col'>
            <p className='text-white align-center font-semibold   text-2xl  md:text-4xl'>mert ünal</p>
            <p className='text-center   text-xs  md:text-sm italic animate-blink'>Software Developer</p>
         </div>

         

         {/*desktop */}
        <div className="hidden display:none md:flex flex-row gap-20 justify-center text-white">
            { navs.map((item,index)=>( <button key={index} onClick={()=>handleNav(item.id)} className={navClass} to="/projects">{item.name}</button>)) }
            
            {/*dil ayarı*/}
            <div className='hidden flex p-4 gap-8 flex-row justify-center'>
              <p>en</p>
              <input type="checkbox" defaultChecked className="toggle toggle-success"  onClick={handleChange}  />
              <p>tr</p>
            </div>
        </div>
    

    </div>
  );
}

export default Navigation;
