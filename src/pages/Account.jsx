import React from 'react'
import SavedShows from '../componets/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          alt=""
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/6f5fcbd6-993f-4d76-b207-799c937026ae/US-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>

        </div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
    {/* <SavedShows/> */}
    </>
  )
}

export default Account