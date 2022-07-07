import React, { useState } from 'react'



export default function TextArea(props) {
    const [text,setText]= useState("");

    function handleUpClick(){
        setText(text.toLocaleUpperCase());
    }
    function handleLoClick(){
        setText(text.toLocaleLowerCase());
    }
    function handleClClick(){
        setText("");
    }
    function handleAlClick(){
    setText(text.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))));
    }
    

    function handleOnChange(event){
        setText(event.target.value);
    }
  return (
   <>
  
  <h1  style={{color:props.modes==="light"? "white" : "black"}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.modes==="light"? "#212529" : "white",color:props.modes==="light"? "white" : "black"}} id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange} placeholder="Enter text here"></textarea>
</div>
<div classNameName="mb-3">
 <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
<button type="button" onClick={handleLoClick} className="btn btn-secondary mx-1">Convert to LowerCase</button>
<button type="button" onClick={handleAlClick} className="btn btn-warning mx-1">First character UpperCase</button>
<button type="button" onClick={handleClClick} className="btn btn-danger mx-1">Clear</button>
</div>

<div className="container my-3"  style={{color:props.modes==="light"? "white" : "black"}}>
  <h1>Words and Characters</h1>
  <p>
    words {text.split(" ").length} and characters {text.length}
  </p>
  <p>
    {0.008*text.split(" ").length} Minutes require to read.
  </p>
</div>

   </>
  );
}
