import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Functionup-mn')    // this method takes some time so thats why we use  useloaderdata method
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-gray-700 text-white m-5 p-5'>
      Github Followers: {data.followers}
     <img src={data.avatar_url} alt="github image" />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Functionup-mn')
    return response.json()
}
