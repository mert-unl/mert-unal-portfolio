import React from 'react'

export function ContactHero({logo,name,link}) {
  return (
    <button className='flex flex-row bg-black/50 w-full border-1  hover:shadow-lg hover:scale-120 duration-700 transition-all items-center align-middle justify-center border-green-600/50 shadow-md shadow-green-700 hover:shadow-green-400 rounded-md p-2 '>

      <a href={link} target='_blank' className='md:flex p-0 gap-4'>
        <img src={logo} className='size-12     border border-green-800  rounded-full bg-green-400 object-cover'/>
        <p className='font-semibold mt-2'>{name}</p>
      </a>
    </button>
  )
}

export function ContactFooter({logo,name,link}){

return(
        <button className='p-1 hover:scale-115 duration-600 transition-all'>
           <a href={link} target='_blank' className='flex flex-col  hover:text-green-400  duration-500 transition-all items-center p-2 gap-2'>
              <img src={logo} className='size-10 rounded-lg border bg-white  hover:bg-green-400 duration-500 transition-all  border-green-800 shadow-md' />
              <p >{name}</p>
           </a>
        </button>
)
}