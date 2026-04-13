import React from 'react'
import Card2 from './Components/Card2'

const App = () => {
  const data =  [
    {name: "Harivansh", proffesion: "velderinbackend",image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "ghansyam", proffesion: "velderInFrontend",image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "amit", proffesion: "velderinapi",image: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "aditya", proffesion: "learning",image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ]
  return (
  
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
    {data.map((item, index)=> (
      <Card2 key={index} values={item}/>
    ))}
    </div>
    </>
  )
}


export default App
