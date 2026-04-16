import React, { useState } from "react";

function App() {
  const [val, setval] = useState({ Name: "Aditya", isbanned: false });

  return (
    <div className="p-4">
      <h1>Name: {val.Name}</h1>
      <h2>isBanned: {val.isbanned.toString()}</h2>
      <button
        onClick={() => setval({ ...val, isbanned: !val.isbanned })}
        className={`px-1 py-1 pt-2  rounded-full  text-xs ${val.isbanned? "bg-red-400": "bg-blue-400"} cursor-pointer`}
      >
        click here
      </button>
    </div>
  );
}
export default App;
