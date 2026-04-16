import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

const App = () => {
  const [user, setUser] = useState([]);

  const handleFormSubmitData = (data) => {
    setUser([...user, data]);
  };
  const handelRemove = (id) => {
    setUser(()=>user.filter((item, index)=> index != id))
  }

  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center ">
      <div className="container mx-auto">
        <Cards handelRemove={handelRemove} user={user} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
};

export default App;
