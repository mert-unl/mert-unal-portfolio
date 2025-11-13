import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

function Skills() {

  const {langData, skillsData} = useContext(AppContext)
  
  return (
      <div className="overflow-hidden flex flex-col gap-4  md:gap-0 w-full  ">
          <h2 className="text-4xl md:text-6xl font-medium md:py-6 animate-blink text-center">
              {langData.skillsSectionTitle}      
          </h2>

          <div className='flex flex-col bg-gray-900/10  backdrop-blur-xs gap-6 '>
              <div className="scroll-track  md:mt-5 flex gap-2">
                {[...skillsData, ...skillsData].map((item, index) => (
                  <SkillElement key={index} logo={item.img} name={item.name} />
                ))}
              </div>

              <div className="reverse-track gap-2">
                {[...skillsData, ...skillsData].map((item, index) => (
                  <SkillElement key={index} logo={item.img} name={item.name} />
                ))}
              </div>
          </div>
      </div>
    )
}


function SkillElement({logo,name}){
    return(
      <div  className='flex flex-col text-center m-2  items-center'>
          <img src={logo} className='h-30 w-30 md:h-55 md:w-55 rounded-lg border-2 border-green-500/60 shadow-2xl shadow-green-700' />
          <p className='py-2 text-lg font-bold'>{name}</p> 
      </div>
    )
}



export default Skills