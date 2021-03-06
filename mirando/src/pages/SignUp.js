import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const SignUp = () => {

  const {user, signUp} = UserAuth()
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }
    catch(error) {
      console.log(error)
    }
  }


  return (
    <div>
      <div className='w-full h-screen'>
        <img
        className="hidden  sm:block absolute w-full h-full object-cover"
        src='https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/5b9fdff5-be3d-4fc6-9606-dd1b4002f277/IN-en-20220530-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt="home" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
          <div className='w-full fixed px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black text-white'>
              <div className='max-w-[320px] mx-auto py-16 '>
                <h1 className='text-3xl font-bold'>SignUp</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                  <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='py-3 my-2 bg-gray-800 rounded' type="email" placeholder="  Email" autoComplete='email'/>
                  <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='py-3 my-2 bg-gray-800 rounded' type="password" placeholder="  Password" autoComplete="current-password" />
                  <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p><input className='mr-2 ' type="checkbox"/> Remember Me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'>
                    <span className='text-gray-600'> Already Subscribed to Mirando ?</span>{'     '}
                    <Link to="/login">Sign In</Link>
                    </p>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp