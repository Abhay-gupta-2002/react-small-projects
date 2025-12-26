import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git pic" width={300}/> </div>
  )
}

export default Github

export const githubInfo=async()=>{
        const res=await fetch('https://api.github.com/users/Abhay-gupta-2002')
        return res.json();
}