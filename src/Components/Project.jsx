import React from 'react'


function Project() {


    const a = ["dans","react","html","css","tailwind","react-router"]


  return (
    <div className='flex flex-col border-1 shadow-green-900 hover:border-3 md:shadow-green-800 md:shadow-2xl  hover:scale-105 transition-all duration-500 shadow-xl  gap-4 p-4 bg-black/70 rounded-3xl'>
      <div className='md:flex  gap-10'>
      <img src="https://picsum.photos/id/1032/3200/3200" alt="proje1" className='w-full rounded-2xl md:w-300  object-cover h-70 md:h-100'/>
     <div className='flex  md:px-2 md:max-w-220 flex-col gap-2'>
      <h2 className='text-2xl md:text-6xl py-4 text-center font-bold'>Proje Adı</h2>
      
        <p className='md:text-xl py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sint aliquid quam dolore porro obcaecati! Nihil dolor sit quasi unde placeat consequuntur ut nisi odio, laudantium neque asperiores, blanditiis voluptate.
        </p>


        <h3 className='text-2xl font-medium py-2'>Teknolojiler</h3>
            <div className='flex flex-wrap gap-3'>
                        {a.map((item,index)=><Tag key={index} item={item}/>)

                        }
            </div>


        <div className='flex justify-between underline  py-2  mt-2  font-medium  md:text-xl  text-md'>
                <a className='border-1 border-white rounded-2xl p-3 text-green-500'>Siteyi incele</a>
                <a>Github</a> 
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