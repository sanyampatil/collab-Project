import React from 'react'
import Typewriter from 'typewriter-effect'
import HomeCrousal from './HomeCrousal'

const Home = () => {
  return (
    <>
      <main className='w-full  mt-16'>
        {/* section hero  */}
        <section className=''>
          <div className='  relative bg-gray-100    sm:grid grid-cols-5 grid-rows-2 space-y-6 sm:space-y-0 sm:gap-4'>
            <div className=' w-[100vh]  h-52 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md  lg:flex  lg:items-center  sm:flex   lg:justify-between lg:px-5 items-center'>
              <div className='logo lg:flex lg:items-center lg:gap-2 '>
                <img
                  src=''
                  alt='mainLogo'
                  className='w-[200px] h-[200px] bg-white rounded-full'
                />
                <div>
                  <h2 className='text-white text-4xl'>
                    जिल्हा क्रीडा संकुल समिति
                  </h2>
                  <p className='text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed, dolore?
                  </p>
                </div>
              </div>
              <div className='ml-20 w-80'>
                {/* <h2 className='text-white text-4xl'>Adsla</h2> */}
                <div className='text-2xl text-white'>
                  <Typewriter
                    options={{
                      strings: ['swimming ', ' coaching', 'food and fun  '],
                      autoStart: true,
                      loop: true,
                      cursor: '',
                      wrapperClassName: 'typewriterpara'
                    }}
                  />
                </div>
                <a
                  href='#'
                  className='uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
                >
                  get start
                </a>
              </div>
            </div>
            <div className='col-span-1   '></div>
          </div>

          <div className='  absolute  top-96  w-screen'>
            <HomeCrousal />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
