import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import UserRegistration from "./UserRegistration"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/UserRegistration" element={<UserRegistration />}></Route>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
