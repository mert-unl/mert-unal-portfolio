import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navClass =
    "text-xl text-center align-center transition-all rounded-3xl  animate-blink  py-2 hover:px-6 hover:mx-10 hover:shadow-md hover:shadow-green-400 duration-500 transform-all hover:scale-130 hover:text-green-500 hover:font-semibold";

  return (


   <div className="navbar bg-black w-screen  shadow-2xl   shadow-green-900 py-2 px-10  md:py-10 md:px-12  m-0  fixed z-10  top-0 left-0 justify-center ">



 <div className="md:hidden relative">


    <div className="dropdown text-white relative ">
      <div tabIndex={0}   role="button"  className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h12" /> </svg>
      </div>
    
         <ul
            tabIndex={0}
            className="menu dropdown-content bg-black/90 text-green-300 rounded-box mt-2 p-2 shadow-lg border border-green-800 absolute left-0"
          >
         <li><NavLink to="/profile">Profil</NavLink></li>
            <li><NavLink to="/projects">Projeler</NavLink></li>
            <li><NavLink to="/skills">Yetenekler</NavLink></li>
            <li><NavLink to="/contact">İletişim</NavLink></li>

      </ul>
    </div>
  </div>




      <div className="hidden md:flex flex-row gap-20 justify-center text-white">
        <NavLink className={navClass}>Profil</NavLink>
        <NavLink className={navClass}>Projeler</NavLink>
        <NavLink className={navClass}>Yetenekler</NavLink>
        <NavLink className={navClass}>İletişim</NavLink>
      </div>
    </div> 

  
  );
}

export default Navigation;
