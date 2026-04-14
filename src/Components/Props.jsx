import React from "react";

const Card2 = ({values, handelClick, index}) => {
  const {name, image, proffesion, friends} = values;
  return (
    <div className="w-52 bg-zinc-100 rounded-md overflow-hidden ">
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3>{name}</h3>
        <h5>{proffesion}</h5>
        <button
          onClick={()=>handelClick(index)}
          className={`px-3 py-1 text-xs text-white ${friends === true? "bg-green-500": "bg-blue-500"} font-semibold rounded-full mt-4`}
        >
          {friends === true? "friend": "Add friend"}
        </button>
      </div>
    </div>
  );
};

export default Card2;

// ***************************************************************************************************************//


import React, { useState } from "react";
import Card2 from "./Components/Card2";
import { FcPrevious } from "react-icons/fc";

const App = () => {
  const data = [
    {
      name: "Harivansh",
      proffesion: "velderinbackend",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "ghansyam",
      proffesion: "velderInFrontend",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "amit",
      proffesion: "velderinapi",
      image:
        "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "aditya",
      proffesion: "learning",
      image:
        "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];
  const [realData, setralData] = useState(data);
  // state jaha banti h wahi modify ho sakti h na ki har jagah 
  const handleFriendsbutton = (cardindex)=>
    setralData((previous)=> {
      return previous.map((item, index)=>{
        if(index === cardindex) {
          return{...item, friends: !item.friends}
        }
        return item;
      })
    });

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((item, index) => (
          <Card2 key={index} handelClick={handleFriendsbutton} values={item} index={index}/>
        ))}
      </div>
    </>
  );
};

export default App;
