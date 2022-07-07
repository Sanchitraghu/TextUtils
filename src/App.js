import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import About from "./components/About";


function App() {
  const [mode,setMode]=useState("light");


 const toggles = ()=>{

  console.log("sanchit");
  
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor="#F2D7D9";
      }else{
        setMode("light");
        document.body.style.backgroundColor="#774360";
      }
}

  return (
  <>
   <Navbar title = "TextUtils"  modes={mode} toggleCheck={toggles} />
   <div className="container my-3">
   <TextArea heading="This is a props" modes={mode} />
   {/* <About /> */}
   </div>
  
   </>
  );
}

export default App;
