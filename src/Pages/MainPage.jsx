import React from 'react'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'
import Footer from '../Components/Footer'
import Experience from './Experience'

function MainPage() {
  return (
    <div className='flex flex-col md:mt-5 mt-10  py-10  md:py-40   gap-20  md:gap-40 w-full px-3 md:top-50 md:px-80  text-white left-0'>

        {
       //about me
       //my projects
       //coming soon project ?
       //Languages / SKill
       //Link touch me, 
       //experience
        }
     <Profile/>
     <Projects/>
     <Skills/>
      <Experience/>
    </div>
  )
}

export default MainPage