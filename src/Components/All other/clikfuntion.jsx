import React, { useState } from 'react'

const App = () => {
  const [val, setVal] = useState(false);
  return (
    <div>
      {/* Print bahar jao if val is false and print mat jao if val is true */}
      <h1>
        {val === false ? "Bahar jao": "Mat jao"}
      </h1>

      <button
      onClick={() =>(setVal(()=> !val))}
      className='px-2 py-2 bg-blue-500 rounded-full mt-5'
      >
        Click here
      </button>
    </div>
  )
}

export default App