import React, { useState } from "react";
import './App.css';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import About from "./components/About";


function App() {
  const [mode,setMode]=useState("light");

      const [alert,setAlert] = useState(null);

    const showAlert = (messege,type)=>{
          setAlert({
            msg : messege,
            type:type
          })

      setTimeout(()=>{
          setAlert(null)
      },1500);

    }

 const toggles = ()=>{

  console.log("sanchit");
  
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor="#F2D7D9";
        showAlert("Light mode Enabled","Success");
      }else{
        setMode("light");
        document.body.style.backgroundColor="#774360";
        showAlert("Dark mode Enabled","Success");
      }
}

  return (
  <>
   <Navbar title = "TextUtils"  modes={mode} toggleCheck={toggles} />
   <Alert alrt={alert} />
   <div className="container my-3">
   <TextArea showAlert={showAlert} heading="This is a props" modes={mode} />


   {/* <About /> */}
   
   </div>
  
   </>
  );
}

export default App;
