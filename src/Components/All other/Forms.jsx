// form 3 type se bana sakte h 3 no type se hum data nikalna page ko realoda honse se bachana sikh rahe h 

// first ref se jo handle karenge

// import React, { useRef } from 'react'

// const App = () => {
//     const name = useRef(null);
//     const age = useRef(null);
//     const email = useRef(null);
//     const handleClick = (details)=>{
//         details.preventDefault()
//         console.log(name.current.value, age.current.value, email.current.value)
//     }

//   return (
//     <div>
//         <form action="" onSubmit={handleClick} >
//             <input className='border-black border-2 overflow-hidden ' ref={name} type="text" />
//             <input className='border-black border-2 overflow-hidden ' ref={age} type="number" />
//             <input className='border-black border-2 overflow-hidden ' ref={email} type="email" />
//             <input type="submit" />
//         </form>
//     </div>
//   )
// }

// export default App

// use state se form 

// import React, { useState } from 'react'

// const App = () => {
//     const [val, setVal] = useState({name: "", email: ""})

//     const handlesubmit = (event)=>{
//         event.preventDefault();
//         console.log(val)

//     }

//   return (
//     <div>
//         <form action="" onSubmit={handlesubmit}>
//             <input onChange={(event)=>setVal({...val,name: event.target.value})} type="text" placeholder='name'/>
//             <input onChange={(event)=>setVal({...val,email: event.target.value})} type="email" placeholder='email'/>
//             <input type="submit" />
            
//         </form>
//     </div>
//   )
// }

// export default App

// react hoocks 

// import React from 'react'
// import { useForm } from 'react-hook-form'

// const App = () => {
//     const {register, handleSubmit} = useForm()
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit(data => console.log(data))}>
//             <input {...register('name')} type="text" placeholder='Enter Name' />
//             <input {...register('email')} type="email" placeholder='Enter Email'/>
//             <input type="submit" />
//         </form>
//     </div>
//   )
// }

// export default App