import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLock2Fill } from 'react-icons/ri'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setloginData({
      ...loginData,
      [name]: value
    })
  }

  async function AccountLogin (event) {
    event.preventDefault()
    if (!loginData.email || !loginData.password) {
      toast.error('All required')
      return
    }

    if (!isEmail(loginData.email)) {
      toast.error('Invalid email id')
      return
    }
    if (!isValidPassword(loginData.password)) {
      toast.error(
        'Password should be 6 - 16 character long with atleast a number and special character'
      )
      return
    }

    const formData = new FormData()
    formData.append('email', loginData.email)
    formData.append('password', loginData.password)

    const response = await dispatch(loginAdminAccount(formData))

    if (response?.payload?.success) {
      console.log(response)
    }

    setloginData({
      email: '',
      password: ''
    })
  }

  return (
    <>
      <section className='authPage h-[100vh] w-[100vw] bg-blue-200'>
        <div className='container lg:flex lg:items-center  w-full  '>
          <div className='header'>
            <h3 className='   font-semibold'>login here</h3>
          </div>
          <form
            noValidate
            onSubmit={AccountLogin}
            className='lg:p-10  p-5 rounded-lg border-1 shadow-xl border-black  lg:w-[35vw]'
          >
            <div className='inputTag'>
              <label>Email Address</label>
              <div className='flex  item-center '>
                <input
                  type='email'
                  placeholder='zk@gmail.com'
                  value={setloginData.email}
                  onChange={handleUserInput}
                />
                <MdOutlineMailOutline />
              </div>
            </div>

            <div className='inputTag'>
              <label>Password</label>
              <div className='flex  item-center '>
                <input
                  type='password'
                  placeholder='Your Password'
                  name='password'
                  value={setregisteData.password}
                  onChange={handleUserInput}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type='submit'>Login</button>
            <Link to={'/login'}>Register</Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
