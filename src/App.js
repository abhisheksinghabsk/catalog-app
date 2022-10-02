import "./clomter/Clomter.scss";
import "./App.scss";
import React, {useState} from "react";
import Clomter from "./clomter/Clomter";
import { Routes, Route, Link } from "react-router-dom";
 import Videos from "./Videos";
 import About from "./About";
 import Contact from "./Contact";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {/* <Clomter/> */}
        <Routes>
        <Route path="/" element={<Clomter />} />
        <Route path="video" element={<Videos />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
       </div>
    );
  }
 
}

export default App;
