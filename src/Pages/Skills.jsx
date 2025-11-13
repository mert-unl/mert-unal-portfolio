import React from 'react'

function Skills() {

     const skills = [
    { logo: "https://picsum.photos/id/1041/3200/3200", name: "React" },
    { logo: "https://picsum.photos/id/1027/3200/3200", name: "Tailwind" },
    { logo: "https://picsum.photos/id/1035/3200/3200", name: "JavaScript" },
    { logo: "https://picsum.photos/id/1044/3200/3200", name: "Kotlin" },
      { logo: "https://picsum.photos/id/1042/3200/3200", name: "HTML5" },
    { logo: "https://picsum.photos/id/1028/3200/3200", name: "CSS3" },
    { logo: "https://picsum.photos/id/1029/3200/3200", name: "TypeScript" },
    { logo: "https://picsum.photos/id/1048/3200/3200", name: "React Router" },
      { logo: "https://picsum.photos/id/1011/3200/3200", name: "Hooks" },
    { logo: "https://picsum.photos/id/1032/3200/3200", name: "Context API"  },
    { logo: "https://picsum.photos/id/1033/3200/3200", name: "Redux" },
    { logo: "https://picsum.photos/id/1036/3200/3200", name: "Zustand" },
        { logo: "https://picsum.photos/id/1036/3200/3200", name: "jQuery"  },
    { logo: "https://picsum.photos/id/1037/3200/3200", name: "PostgreSQL"},
    { logo: "https://picsum.photos/id/1038/3200/3200", name:  "Spring Boot" },
        { logo: "https://picsum.photos/id/1039/3200/3200", name:  "Spring Boot" },
    { logo: "https://picsum.photos/id/1040/3200/3200", name:   "Hibernate / JPA" },
    { logo: "https://picsum.photos/id/1043/3200/3200", name:  "Vite" },
    { logo: "https://picsum.photos/id/1049/3200/3200", name:  "REST API"  },
    { logo: "https://picsum.photos/id/1047/3200/3200", name:  "GitHub / GitLab"  },
        { logo: "https://picsum.photos/id/1054/3200/3200", name:  "Cypress"  },


  ]

  return (
    <div className="overflow-hidden flex flex-col gap-4  md:gap-0 w-full  ">

          <h2 className="text-4xl md:text-6xl font-medium md:py-6 animate-blink text-center">
        Yeteneklerim
      </h2>
      <div className='flex flex-col bg-gray-900/10  backdrop-blur-xs gap-6 '>

     
      <div className="scroll-track  md:mt-5 flex gap-2">
        {[...skills, ...skills].map((item, index) => (
          <SkillElement key={index} logo={item.logo} name={item.name} />
        ))}
      </div>

         <div className="reverse-track gap-2">
        {[...skills, ...skills].map((item, index) => (
          <SkillElement key={index} logo={item.logo} name={item.name} />
        ))}
      </div>
       </div>
    </div>
  )
}


function SkillElement({logo,name}){
    return(<div className='flex flex-col text-center m-2  items-center'>
         <img src={logo} className='h-30 w-30 md:h-55 md:w-55 rounded-lg border-2 border-green-500/60 shadow-2xl shadow-green-700' />
         <p className='py-2 text-lg font-bold'>{name}</p> 
    </div>)
}



export default Skills