import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-500 text-white' >
        Github followers : {data.following}
        <br />
        Total Repo : {data.public_repos}
        <img src={data.avatar_url} alt="Git pic" width={250} />
        </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/nikhilgla')
    const data = await response.json()
    console.log(data);
    
    return data
}