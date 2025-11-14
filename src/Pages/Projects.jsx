import React, { useContext, useState } from 'react'
import Project from '../Components/Project'
import { AppContext } from '../context/AppContextProvider'

function Projects() {
  const [seeMore, setSeeMore] = useState(false)
   
  
  const {langData} = useContext(AppContext)
  
 const projectSection = langData.projectSection

  const projects = projectSection.projects
  const visibleProjects = seeMore ? projects : projects.slice(0, 3)

  return (
    <div id="projects" className="scroll-mt-40 flex flex-col items-center gap-8  md:gap-10">
    
        <h2 className="text-4xl md:text-6xl font-medium  animate-blink  text-center ">
          {projectSection.title}
        </h2>

          {visibleProjects.map((project) => (
            <Project key={project.id} id={project.id} usedTech={ projectSection.secondTitle} imgSrc={project.imgSrc} name={project.name} tags={project.tags} context={project.context}  viewSite={project.viewSite} github={project.github} buttonText={projectSection.button} />
          ))}

        {projects.length > 3 && (
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="border-2 bg-black rounded-md hover:shadow-lg  shadow-green-700 
            hover:scale-110 transition-all border-green-500  duration-400  text-md  md:text-2xl mt-2 px-4 py-2"
          >
            {seeMore ? `${projectSection.showLess}` :`${projectSection.showMore}`}
          </button>
        )}
    </div>
  )
}

export default Projects
