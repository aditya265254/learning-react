import React from "react";

const Navbar = ({ data }) => {
  return (
    <div className="px-20 py-2 flex items-center justify-between">
      <h2>orange</h2>
      <div className="px-4 py-2 flex bg-orange-500 text-white rounded-md text-sm gap-3">
        <h3>Favourite</h3>
        <h4>{data.filter((item) => item.added).length}</h4>
      </div>
    </div>
  );
};

export default Navbar;
