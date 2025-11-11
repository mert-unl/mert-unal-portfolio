import React from 'react'

function Profile() {
  return (
    <div className="">

        <img   className='w-full h-50  md:h-120  border-1 rounded-xl' alt="mert" src=""/> 
         <div className='flex flex-col mt-6 gap-2 text-center bg-black opacity-80 rounded-2xl p-4'>
        <h2 className='text-2xl text-green-100 text-shadow-lg text-shadow-green-900 py-1 font-bold'>Hakkımda</h2>
        <p>Merhaba ben mert frontend backend ve mobil yazılımla ilgileniyorum. </p>
        <p>Yine kendi yazdığım blog siteme buradan gidebilirsiniz --<a href='https://mertunalblog.vercel.app/' target='_blank'>Mert Ünal Blog</a></p>
        </div>
    </div>
  )
}

export default Profile