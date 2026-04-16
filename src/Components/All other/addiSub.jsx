import React, { useState } from "react";

const addstring = () => {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="pl-5">
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      {/* <button
        onClick={() =>
          setval(() => val.filter((item, index) => index != val.length - 1))
        }
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
        click
      </button> */}

      {/* <button
        onClick={() =>
          setval(() => val.filter((intem, index) => index != val.length - 1))
        }
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
        click
      </button> */}

      {/* yaha pe 3 ko hatana h bs uska funtion likh raha h   */}
      {/* <button
        onClick={() => setval(() => val.filter((item, index) => index !== 2))}
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
        click
      </button> */}

      {/* aab eak task aur karenge yaha pe button ke eak click pe aise sare no hata dijiye jo 2 se dive hote ho  */}
      {/* <button
        onClick={() => setval(()=>val.filter((item,index)=> item%2 !== 0))}
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
        click me
      </button> */}

      {/* // addition in array  */}

      <button
        onClick={()=>setval([...val, 10])}
        className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
      >
        click me
      </button>
    </div>
  );
};

export default addstring;
