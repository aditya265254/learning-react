import React, { useState } from "react";

const App = () => {
  const [Val, setval] = useState([
    { name: "aditya", age: "23" },
    { name: "shivam", age: "21" },
    { name: "akash", age: "20" },
  ]);
  return (
    <div>
      {Val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button 
      onClick={()=>setval(()=>Val.map(item =>item.name === "shivam"? ({name: "shivam", age: 26}): item))}
      className="px-2 py-1 rounded-full bg-blue-400 text-xs">
        click
      </button>
    </div>
  );
};

export default App;
