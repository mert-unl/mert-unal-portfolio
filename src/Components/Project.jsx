import React from 'react'


function Project({id,imgSrc,name,context,tags=[],viewSite,github,usedTech,buttonText}) {


 
    const linkClass =" animate-blink  md:text-xl hover:scale-110 duration-600 transition-all text-md  md:text-lg  border-1 w-full py-2 md:py-4 border-green-600 bg-black/70  rounded-lg shadow-green-700 hover:shadow-green-500 shadow-md  hover:shadow-lg  text-white  "

  return (
    <div id={id} className='flex flex-col  shadow-green-700  border-green-500/30 md:border-1 md:shadow-green-800 md:shadow-2xl  hover:scale-110 duration-800 shadow-xl p-4 md:p-6 bg-black/40 backdrop-blur-sm rounded-2xl'>
      <div className='md:flex  gap-10'>
      <img src={imgSrc} alt={name} className='w-full rounded-md md:max-w-1/2  object-cover h-70 md:h-100'/>

        <div className='flex  md:px-2 md:max-w-220 flex-col gap-2'>
          <h2 className='text-2xl md:text-5xl py-4 text-center font-bold'>{name}</h2>
          
            <p className='md:text-xl'>{context}
            </p>

            <h3 className='text-2xl font-medium mt-2 py-2'>{usedTech}</h3>

                <div className='flex flex-wrap gap-3'>
                  {tags.map((tag,index)=><Tag key={index} item={tag}/>)}
                </div>

            <div className='flex text-center py-4 mt-2  gap-7   font-medium '>
              <a className={linkClass} href={viewSite}>{buttonText}</a>
              <a className={linkClass}  href={github} >Github</a> 
            </div>

        </div>
      </div>




    </div>
  )
   
  function Tag({item}){
        return(
        <div className='border-1 w-fit px-4 bg-black/40 rounded-lg p-2'> 
           <p>{item}</p>
        </div>)
    }

}



export default Project