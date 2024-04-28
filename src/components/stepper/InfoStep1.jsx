import { TextField } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
// import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BsPersonSquare } from 'react-icons/bs'

const InfoStep1 = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState('')

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    avatar: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setSignupData({
      ...signupData,
      [name]: value
    })
  }

  function getImage (event) {
    event.preventDefault()
    // getting the image
    const uploadedImage = event.target.files[0]

    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage
      })
      const fileReader = new FileReader()
      fileReader.readAsDataURL(uploadedImage)
      fileReader.addEventListener('load', function () {
        setPreviewImage(this.result)
      })
    }
  }

  async function createNewAccount (event) {
    event.preventDefault()
    if (
      !signupData.email ||
      !signupData.password ||
      !signupData.fullName ||
      !signupData.avatar
    ) {
      toast.error('Please fill all the details')
      return
    }

    // checking name field length
    if (signupData.fullName.length < 5) {
      toast.error('Name should be atleast of 5 characters')
      return
    }
    // checking valid email
    if (!isEmail(signupData.email)) {
      toast.error('Invalid email id')
      return
    }
    // checking password validation
    if (!isPassword(signupData.password)) {
      toast.error(
        'Password should be 6 - 16 character long with atleast a number and special character'
      )
      return
    }

    const formData = new FormData()
    formData.append('fullname', signupData.fullName)
    formData.append('email', signupData.email)
    formData.append('password', signupData.password)
    formData.append('avatar', signupData.avatar)

    // dispatch create account action
    // const response = await dispatch(createAccount(formData))
    if (response?.payload?.success) navigate('/')

    setSignupData({
      fullName: '',
      email: '',
      password: '',
      avatar: ''
    })
    setPreviewImage('')
  }

  return (
    <>
      <div className='flex items-center justify-center mt-10'>
        <div className='flex items-center justify-center w-[70vw] md:w-[50vw] '>
          <label htmlFor='image_uploads' className='cursor-pointer'>
            {previewImage ? (
              <img
                className='   lg:w-72 lg:h-72 w-28  border-2 border-neutral-600  h-28 m-auto'
                src={previewImage}
              />
            ) : (
              <BsPersonSquare className=' lg:w-72 lg:h-72 w-28   h-28     m-auto text-gray-300' />
            )}
          </label>
          <input
            onChange={getImage}
            className='hidden'
            type='file'
            name='image_uploads'
            id='image_uploads'
            accept='.jpg, .jpeg, .png, .svg'
          />
        </div>
      </div>
      <div className='flex gap-2'>
        <TextField
          id='first_name'
          label='first_name'
          variant='outlined'
          placeholder='Enter Your first Name'
          fullWidth
          margin='normal'
          name='first_name'
        />

        <TextField
          id='middle_name'
          label='middle Name'
          variant='outlined'
          placeholder='Enter middle Name'
          fullWidth
          margin='normal'
          name='middle_name'
        />

        <TextField
          id='last_name'
          label='full Name'
          variant='outlined'
          placeholder='Enter Your last_name'
          fullWidth
          margin='normal'
          name='last_name
'
        />
      </div>
      <TextField
        id='email'
        label='E-mail'
        variant='outlined'
        placeholder='Enter Your E-mail Address'
        fullWidth
        margin='normal'
        name='emailAddress'
      />

      <TextField
        id='alternate-phone'
        label='Alternate Phone'
        variant='outlined'
        placeholder='Enter Your Alternate Phone'
        fullWidth
        margin='normal'
        name='alternatePhone'
      />
      <TextField
        id='alternate-phone'
        label='Alternate Phone'
        variant='outlined'
        placeholder='Enter Your Alternate Phone'
        fullWidth
        margin='normal'
        name='alternatePhone'
      />
      <TextField
        id='address'
        label='address'
        variant='outlined'
        placeholder='Enter Your Address'
        fullWidth
        margin='normal'
        name='address'
      />

      <InputLabel id='demo-select-small-label'>Gender</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        // value={gender}
        label='Age'
        // onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>manus</MenuItem>
        <MenuItem value={20}>bai</MenuItem>
        <MenuItem value={30}>Other</MenuItem>
      </Select>
    </>
  )
}

export default InfoStep1
