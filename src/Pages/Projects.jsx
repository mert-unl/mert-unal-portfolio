import React from 'react'
import Project from '../Components/Project'

function Projects() {
  return (
    <div className='flex flex-col gap-5 md:gap-14'>

        <h2 className='text-5xl font-medium md:text-7xl md:py-12 text-center py-5 underline animate-blink text-shadow-lg text-shadow-green-900' >Projelerim</h2> 
       <Project/>
       <Project/>


    </div>
  )
}

export default Projects