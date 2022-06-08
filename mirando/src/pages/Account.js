import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img
        className="w-full h-[400px] object-cover"
        src='https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/5b9fdff5-be3d-4fc6-9606-dd1b4002f277/IN-en-20220530-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt="home" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]  '>
              <div className='absolute top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
              </div>
        </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account