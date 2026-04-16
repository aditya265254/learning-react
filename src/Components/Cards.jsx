import React from "react";
import Card from "./Card";

const Cards = ({ user, handelRemove }) => {
  return (
    <div className="w-full max-h-92 overflow-auto p-4  flex justify-center gap-5 flex-wrap">
      {user.map((item, index) => {
        return <Card handelRemove={handelRemove} id={index} key={index} userItem={item} />;
      })}
    </div>
  );
};

export default Cards;
