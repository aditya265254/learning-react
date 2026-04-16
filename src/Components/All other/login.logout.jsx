  const [val, changeval] = useState({isLoggedIn: false});
  return (
    <div  className="flex justify-center items-center h-screen flex-col ">
      <h1>{val.isLoggedIn?"Welcome Aditya":"Please logIn"}</h1>
      <button onClick={() => changeval({...val, isLoggedIn: !val.isLoggedIn})} className="px-3 py-1 bg-blue-400 cursor-pointer">{val.isLoggedIn? "Logout": "Login"}</button>
      </div>
    
  )