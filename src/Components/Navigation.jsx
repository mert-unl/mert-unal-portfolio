import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navClass =
    "text-xl text-center align-center transition-all rounded-3xl  animate-blink  py-2 hover:px-6 hover:mx-10 hover:shadow-md hover:shadow-green-400 duration-500 transform-all hover:scale-130 hover:text-green-500 hover:font-semibold";

  return (





    <div className="z-10   bg-black w-screen  shadow-2xl   shadow-green-900 py-2  md:py-10 justify-center fixed top-0 left-0">
      <div className="flex md:hidden  flex-row gap-20 justify-center text-white">
        <NavLink className={navClass}>Profil</NavLink>
        <NavLink className={navClass}>Projeler</NavLink>
        <NavLink className={navClass}>Yetenekler</NavLink>
        <NavLink className={navClass}>İletişim</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
