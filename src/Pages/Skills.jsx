import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

function Skills() {

  const {langData, skillsData} = useContext(AppContext)
  
     
          
  return (
      <section   id="skills" className="scroll-mt-40 overflow-hidden flex flex-col  w-full  ">
          <h2 className="text-4xl md:text-6xl font-medium md:py-6 animate-blink text-center">
              {langData.skillsSectionTitle}      
          </h2>

          <div className='flex flex-col bg-gray-900/10  mt-10 md:mt-5 backdrop-blur-xs gap-4 '>
              <div className="scroll-track   flex">
                {[...skillsData,...skillsData].map((item, index) => (
                  <SkillElement key={index} logo={item.img} name={item.name} />
                ))}
              </div>

              <div className="reverse-track">
                {[...skillsData,...skillsData].map((item, index) => (
                  <SkillElement key={index} logo={item.img} name={item.name} />
                ))}
              </div>
          </div>
      </section>
    )
}


function SkillElement({logo,name}){
    return(
      <div  className='flex flex-col  text-center m-2  items-center'>
          <img src={logo} className='h-30 w-30  bg-green-800/50 md:h-55 md:w-55 rounded-lg border-2 border-green-500/60 shadow-2xl shadow-green-700' />
          <p className='py-2 text-lg font-bold'>{name}</p> 
      </div>
    )
}



export default Skills