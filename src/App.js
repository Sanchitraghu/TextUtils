import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";


function App() {
  return (
  <>
   <Navbar title = "TextUtils" />
   <div className="container my-3">
   <TextArea heading="This is a props"/>
   </div>
  
   </>
  );
}

export default App;
