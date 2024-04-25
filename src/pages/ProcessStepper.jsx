import React from 'react'

const ProcessStepper = () => {
  return (
    <div className=' w-[100vw] flex items-center justify-center flex-col '>
      <div className=' w-full flex   items-center  pl-52   box-s border-black   h-24'>
        <ol className='flex  items-center  justify-center w-full mb-4 sm:mb-5'>
          <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <div className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0'>
              <svg
                className='w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 16'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z' />
              </svg>
            </div>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <div className='flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0'>
              <svg
                className='w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 14'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z' />
                <path d='M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z' />
              </svg>
            </div>
          </li>
          <li className='flex items-center w-full'>
            <div className='flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0'>
              <svg
                className='w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 18 20'
              >
                <path d='M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z' />
              </svg>
            </div>
          </li>
        </ol>
      </div>
      <form
        action='#'
        className='flex items-center justify-center  flex-col w-[80vw] border-2 border-black p-10'
      >
        <h3 className='mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white'>
          Registration form
        </h3>
        <div className='grid gap-4 mb-4 sm:grid-cols-2'>
          <div className='w-[20vw]'>
            <label
              for='username'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Username
            </label>
            <input
              type='text'
              name='username'
              id='username'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='username.example'
              required=''
            />
          </div>
          <div className='w-[20vw]'>
            <label
              for='contact'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              contact
            </label>
            <input
              type='number'
              name='contact'
              id='contact'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='contact.example'
              required=''
            />
          </div>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email
            </label>
            <input
              type='mail'
              name='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='@123.com'
              required=''
            />
          </div>{' '}
          <div>
            <label
              for='bloodGroup'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Blood Group
            </label>
            <input
              type='text'
              name='bloodGroup'
              id='bloodGroup'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='enter'
              required='b+'
            />
          </div>
          <div>
            <label
              for='gender'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Select an option
            </label>

            <select
              id='gender'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option value='m'> manus</option>
              <option value='f'>bai</option>
              <option value='o'>other</option>
            </select>
          </div>
          <div>
            <label
              for='address'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              address
            </label>
            <input
              type='text'
              name='address'
              id='address'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='enter'
              required='b+'
            />
          </div>
          <div>
            <label
              for='gender'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Select an batches
            </label>

            <select
              id='gender'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a batch</option>
              <option value='m'> 7-8</option>
              <option value='f'>9-10</option>
              <option value='o'>10-12</option>
              <option value='o'>1-2</option>
            </select>
          </div>
          <div className='w-[20vw]'>
            <label
              for='EmergencyContact'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Emergency Contact Number
            </label>
            <input
              type='number'
              name='EmergencyContact'
              id='EmergencyContact'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='EmergencyContact.example'
              required=''
            />
          </div>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          done
        </button>
        <div className='  w-full relative '>
          <button className=' absolute   bottom-0 right-1 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800'>
            next
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProcessStepper
