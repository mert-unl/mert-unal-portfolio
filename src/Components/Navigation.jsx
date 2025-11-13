import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [menu, setMenu] = useState(false);

  const navClass =
    "text-xl text-center align-center transition-all animate-blink rounded-3xl py-2 hover:px-6 hover:mx-10 hover:shadow-md hover:shadow-green-400 duration-600 transform-all hover:scale-130  hover:font-semibold";

  return (
    <div className="navbar bg-black w-screen shadow-2xl  shadow-green-700 md:shadow-green-900 py-5 px-5 md:py-10 md:px-12 fixed z-10 top-0 left-0 justify-center">

      <div className="md:hidden relative ">
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
          <ul className="absolute left-0 mt-2 w-48 bg-black text-green-100 animate-blink rounded-box p-2 shadow-lg border rounded-md border-green-800">
            <li><NavLink to="/profile" onClick={() => setMenu(false)}>Profil</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setMenu(false)}>Projeler</NavLink></li>
            <li><NavLink to="/skills" onClick={() => setMenu(false)}>Yetenekler</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenu(false)}>İletişim</NavLink></li>
          </ul>
        )}
      </div>


        
         <div className='text-white flex md:top-8  top-2  md:left-12 left-22   fixed flex-col'>
          <p className='text-white align-center font-semibold   text-2xl  md:text-4xl'>mert ünal</p>
          <p className='text-center   text-xs  md:text-sm italic animate-blink'>Software Developer</p>
         </div>
       
        <div className="hidden md:flex flex-row gap-20 justify-center text-white">
          <NavLink className={navClass} to="/profile">Profil</NavLink>
          <NavLink className={navClass} to="/projects">Projeler</NavLink>
          <NavLink className={navClass} to="/skills">Yetenekler</NavLink>
          <NavLink className={navClass} to="/contact">İletişim</NavLink>
        </div>
    

    </div>
  );
}

export default Navigation;
