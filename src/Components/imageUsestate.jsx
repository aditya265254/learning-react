import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

export const App = () => {
const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-60 h-32 relative rounded-xl overflow-hidden flex'>
        <img className={`shrink-0 ${val === false? "-translate-x-[0%]": "-translate-x-[100%]"} transition-transform duration-200 h-full w-full object-cover`} src="https://plus.unsplash.com/premium_photo-1691852519452-2fcaab1be9cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`shrink-0 ${val === false? "-translate-x-[0%]": "-translate-x-[100%]"} transition-transform duration-200 h-full w-full object-fill`}  src="https://images.unsplash.com/photo-1775628038477-8093ca346d00?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={()=> setVal(()=>!val)} className='w-8 h-8 bg-[#dadada8b] absolute bottom-[0%] flex items-center justify-center rounded-full left-1/2 -translate-x-[50%] -translate-y-[50%] cursor-pointer'>
          <FaArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  )
}
export default App;