import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()
  console.log(data);
  // yeah is liay commint kia hai qk loader use hai ager loader hata dain to yeah bhi kam karay ga 
  //   const [data , setData] = useState([])
  // useEffect(()=>{
  // fetch('https://api.github.com/users/hiteshchoudhary')
  // .then(response => response.json())
  // .then(data=>{
  //   setData(data)
  // console.log(data);
  // })
  // },[])
  

  return (
    <>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}
        className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
      >
        <h1 style={{ marginBottom: "5px" }}>Github Details</h1>
        <h1> {data.name}</h1>
        <img src={data.avatar_url} alt="github imge" height={250} width={250} style={{ borderRadius: '50%', marginBottom: '5px' }} />
        <p style={{ fontSize: '20px' }}>{data.bio}</p>

      </div>

    </>
  )
}
export default Github
// loader work
// yeah kam hum nay is liay yahan kia hai qk hum nay loader use kia hai api ko call karatay waqt
// or is say hamain yeah benifit milta hai kay jesay hi hum kisi bhi field per click karnay kay liay cursor lay kar jaingay to yeah loader api ko call karday ga fetch say bhi pehlay
// bus is kay liay ek function banana hai or phir usay jis field per bhi use karna hai wahan loader kay under rakh dain or uper jo hook use hai woh lazmi import karna hai 

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/Muhammad-Bilal079')

  return response.json()
  console.log(data);
}
