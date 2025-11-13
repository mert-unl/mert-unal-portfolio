import React from 'react'

function Experience() {
  return (
    <div className='flex flex-col   mt-10'>
   
     <h2 className="text-4xl md:text-6xl font-medium text-center  animate-blink md:py-5  ">
        Tecrübelerim
      </h2>
<div className=' md:grid md:grid-cols-3 gap-6 mt-5'>
  <ExperienceElement/>
   <ExperienceElement/>
</div>
 
    </div>
  )
}



function ExperienceElement(){


    return(
        <div className='flex flex-col border border-lime-800 backdrop-blur-xs hover:scale-110 duration-1000 transition-all shadow-green-800 shadow-lg rounded-xl p-4'>
            <p className='text-3xl font-bold'>Insider</p>
            
            <div className='flex flex-row justify-between'>
                <p className="text-lg text-green-300 font-semibold">Bootcamp</p>
                <p>2016-2020</p>
            </div>
    
            <p className='py-2 text-md leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus voluptatem, quod assumenda hic necessitatibus, minima nam unde cum atque doloribus molestias exercitationem aliquam numquam ut ratione! Iusto, ducimus enim.</p>
        </div>
    )
}





export default Experience