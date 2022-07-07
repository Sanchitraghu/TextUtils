import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
// import TextArea from "./components/TextArea";
import About from "./components/About";


function App() {
  return (
  <>
   <Navbar title = "TextUtils" />
   <div className="container my-3">
   {/* <TextArea heading="This is a props"/> */}
   {/* <TextArea heading="This is a props"/> */}
   <About />
   </div>
  
   </>
  );
}

export default App;
