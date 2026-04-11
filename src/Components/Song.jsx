import React from "react";

function Song() {
  const data = [
    {
      Name: "Mahi Ve",
      Descreption: "this is the song You like to download click below link",
    },
    {
      Name: "Quismat",
      Descreption: "this is the song You like to download click below link",
    },
  ];
  const handleClickDownloads = () => {
    alert("Download here");
  };
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center">
      {data.map((item, index) => (
        <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="text-xl font-semibold">{item.Name}</h3>
          <p className="text-xs mt-2">{item.Descreption}</p>
          <button
            onClick={handleClickDownloads}
            className="px-2 py-1 bg-blue-500 text-zinc-100 rounded text-xs font-semibold mt-3 cursor-pointer"
          >
            Download now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Song;
