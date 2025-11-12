import React, { useState } from 'react'
import Project from '../Components/Project'

function Projects() {
  const [seeMore, setSeeMore] = useState(false)
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.  adipisci voluptas corporis praesentium quasi totam dolor reprehenderit, illum enim maiores, voluptatum repellat autem."
   
  const projects = [
    { title: "Pizza App", tags: ["React","Tailwind","Router"], content:text },
    { title: "Blog", tags: ["React","MDX","API"],content:text},
    { title: "Portfolio v2", tags: ["React","ThreeJS"], content:text },
    { title: "Old Portfolio", tags: ["HTML","CSS","JS"],content:text },
    { title: "Dungeon Warrior", tags: ["Phaser","GameDev"], content:text},
    { title: "Product UI", tags: ["Figma","React"], content:text }
  ]


  const visibleProjects = seeMore ? projects : projects.slice(0, 3)

  return (
    <div className="flex flex-col items-center gap-8  md:gap-10">
      <h2 className="text-4xl md:text-6xl font-medium  animate-blink md:py-5 text-center ">
        Projelerim
      </h2>

      {visibleProjects.map((project, index) => (
        <Project key={index} title={project.title} tags={project.tags} content={project.content} />
      ))}

      {projects.length > 3 && (
        <button
          onClick={() => setSeeMore(!seeMore)}
          className="border-2 bg-black rounded-md hover:shadow-lg  shadow-green-700 
          hover:scale-110 transition-all border-green-500  duration-400  text-md  md:text-2xl mt-5  px-4 py-2"
        >
          {seeMore ? "Daha az göster" : "Daha fazla proje göster ..."}
        </button>
      )}
    </div>
  )
}

export default Projects
