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
    <div className="overflow-hidden flex flex-col gap-4  md:gap-6 w-full  py-20">

          <h2 className="text-5xl md:text-7xl font-medium md:py-6 animate-blink text-center underline">
        Yeteneklerim
      </h2>
      <div className="scroll-track mt-10 md:mt-5 flex gap-2">
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
  )
}


function SkillElement({logo,name}){
 
    return(<div className='flex flex-col text-center m-2  items-center'>
         <img src={logo} className='h-30 w-30 md:h-50 md:w-50 rounded-lg border-2 border-green-700 shadow-2xl shadow-green-800' />
         <p className='py-2 text-lg font-medium'>{name}</p> 
    </div>)

}



export default Skills