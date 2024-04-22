import React from 'react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
      <main>
        {/* section hero  */}
        <section>
          <div class='bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4'>
            <div class=' h-52 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md   lg:flex  lg:items-center  sm:flex   lg:justify-between lg:px-5 items-center'>
              <div className='logo lg:flex lg:items-center lg:gap-2 '>
                <img
                  src=''
                  alt='mainLogo'
                  className='w-[200px] h-[200px] bg-white rounded-full'
                />
                <div>
                  <h2 class='text-white text-4xl'>
                    यवतमाळ क्रीडा संकुलन समिति
                  </h2>
                  <p class='text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed, dolore?
                  </p>
                </div>
              </div>
              <div class='ml-20 w-80'>
                {/* <h2 class='text-white text-4xl'>Adsla</h2> */}
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
                  class='uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
                >
                  get start
                </a>
              </div>
            </div>
            <div class='h-96 col-span-1 '>
              <div class='bg-white py-3 px-4 rounded-lg flex justify-around items-center '>
                <input
                  type='text'
                  placeholder='seach'
                  class=' bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2'
                />
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor '
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </span>
              </div>
              <div class='bg-white  rounded-md'>
                <h1 class='text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600'>
                  Service
                </h1>
                <div class='bg-white rounded-md list-none  text-center '>
                  <li class='py-3 border-b-2'>
                    <a href='#' class='list-none  hover:text-indigo-600'>
                      Products
                    </a>
                  </li>
                  <li class='py-3 border-b-2'>
                    <a href='#' class='list-none  hover:text-indigo-600'>
                      Models
                    </a>
                  </li>
                  <li class='py-3 border-b-2'>
                    <a href='#' class='list-none  hover:text-indigo-600'>
                      Pricing
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
