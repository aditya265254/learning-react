import React, { useState } from "react";

const addstring = () => {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="pl-5">
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button
        onClick={() =>
          setval(() => val.filter((item, index) => index != val.length - 1))
        }
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
        click
      </button>
    </div>
  );
};

export default addstring;
