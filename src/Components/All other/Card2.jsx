import React from "react";

const Card2 = ({ data, handleClick, index }) => {
  const { image, name, artistName, added } = data;

  return (
    <div className="w-60 bg-zinc-100  p-4 rounded-md  flex gap-4 pb-10  relative mt-10">
      <div className="w-20 h-20  bg-orange-500 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold leading-none">{name}</h3>
        <h6 className="text-sm">{artistName}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 ${added === false ? "bg-green-500" : "bg-red-500"} absolute text-white text-xs rounded-full bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] whitespace-nowrap cursor-pointer`}
      >
        {added === false ? "Add to favourite" : "remove from fav"}
      </button>
    </div>
  );
};
//app jsx ka code yaha dal raha hu

// import React, { useState } from "react";
// import Card2 from "./Components/Card2";
// import Navbar from "./Components/Navbar";

// const App = () => {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1773332611522-06b86b48cbf1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "raja ji ke dil",
//       artistName: "amit",
//       added: false,
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1759354001829-233b2025c6b2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "raja ji",
//       artistName: "ghansayam",
//       added: false,
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1774278199263-24165ea65cee?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Sadeya para ",
//       artistName: "Harivansh",
//       added: false,
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1759765582417-576adfd4402d?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Daiyara",
//       artistName: "Aditya",
//       added: false,
//     },
//   ];

//   const [songData, setSongData] = useState(data);
//   const handleClick = (index) => {
//     setSongData((prev) => {
//       return prev.map((item, itemindex) => {
//         if (itemindex === index) return { ...item, added: !item.added };
//         return item;
//       });
//     });
//   };

//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300 gap-4 flex-wrap">
//         <Navbar data={songData} />
//         <div className="px-20 flex gap-10 mt-10">
//           {songData.map((obj, index) => (
//             <Card2
//               data={obj}
//               handleClick={handleClick}
//               key={index}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

