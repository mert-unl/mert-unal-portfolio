import React from 'react'

function Profile() {
  return (
    <div className="">

        <img   className='w-full h-50  md:h-120  border-1 rounded-xl object-cover' alt="mert" src="https://picsum.photos/id/1045/3200/3200"/> 
         <div className='flex flex-col my-10 gap-4 text-center bg-gray-900/80  text-lg rounded-2xl py-6 px-2'>
        <h2 className='text-3xl text-green-100 text-shadow-lg text-shadow-green-900 py-1 font-bold'>Hakkımda</h2>
        <p>Merhaba ben mert frontend backend ve mobil yazılımla ilgileniyorum. </p>
        <p>Yine kendi yazdığım blog siteme buradan gidebilirsiniz --<a href='https://mertunalblog.vercel.app/' target='_blank'>Mert Ünal Blog</a></p>
        </div>
    </div>
  )
}

export default Profile