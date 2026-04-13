
import React, { useState } from 'react'

const App = () => {
  const [val, setval] = useState({Name: "Aditya singh", Age: 24})
  return (
    <div>
    <button onClick={()=> {
      setval({...val, gender: "male"})
      console.log(val)
    }}>data

    </button>
    </div>
  )
}

export default App 