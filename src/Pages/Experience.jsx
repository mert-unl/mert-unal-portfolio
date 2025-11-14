import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

function Experience() {

  const {langData}  = useContext(AppContext)
  const experiences = langData.experiencesSection.experiences

  return (
      <div className='flex flex-col'>
      
        <h2 className="text-4xl md:text-6xl font-medium text-center  animate-blink  py-2  ">
          {langData.experiencesSection.title}
        </h2>

        <div className=' md:grid md:grid-cols-3 flex flex-col gap-8 mt-5'>
            {experiences.map((item)=>  <ExperienceElement key={item.id} company={item.name} position={item.position} year={item.years} context={item.context} />)} 
        </div>
      
      </div>
  )
}

function ExperienceElement({company,position,year,context}){
    return (
        <div  className='flex flex-col border border-lime-800 backdrop-blur-sm bg-black/20 md:hover:scale-110 duration-600 transition-all hover:shadow-green-500 hover:shadow-lg shadow-green-800 shadow-lg rounded-xl p-4'>
            <p className='text-3xl font-bold'>{company}</p>
            
            <div className='flex flex-row  py-1 justify-between'>
                <p className="text-lg text-green-300  font-semibold">{position}</p>
                <p>{year}</p>
            </div>
    
            <p className='py-2  text-md  break-words'>{context}</p>
        </div>
    )
}





export default Experience