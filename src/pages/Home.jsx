import React from 'react'
import Typewriter from 'typewriter-effect'
import HomeCrousal from './HomeCrousal'

const Home = () => {
  return (
    <>
      <main className='w-full  mt-16'>
        {/* section hero  */}
        <section className=' w-full h-44 bg-blue-500'>
          <div className='flex items-center justify-between'>
            <div className='flex  items-center gap-10'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png'
                alt=''
                className='w-[12vw]'
              />
              <h1 className='text-[3vw] text-white'>
                जिल्हा क्रीडा संकुल समिति
              </h1>
            </div>
            <div className='mr-20'>
              <div className=' bg-gray-200  w-[30vw]  rounded-md   h-40 '></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
