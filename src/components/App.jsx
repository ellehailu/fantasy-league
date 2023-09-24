import React, {useState} from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import AccountManagement from "./AccountManagement";

function App(){
  const[user, setUser] = useState(null);

  return (
    <div>
      <Header />
      <Home user={user}/>
      <Footer/>

    </div>
  );
}

export default App;
