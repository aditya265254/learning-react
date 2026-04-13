import React from 'react'

const Card2 = ({values}) => {
    const {name, image, proffesion} = values
  return (
    <div className='w-52 bg-zinc-100 rounded-md overflow-hidden '>
        <div  className='w-full h-32 bg-sky-200'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3>{name}</h3>
            <h5>{proffesion}</h5>
            <button onClick={()=>alert("adding as a friend")} className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-full mt-4'>Add friend</button>
        </div>
    </div>
  )
}

export default Card2