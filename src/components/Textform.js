import React,{useState} from 'react';
export default function Textform(props) {
    const[text,setText]=useState("");
    let handleOnChange=(event)=>{
        setText(event.target.value);
         };
         let toUpperClick=()=>{
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Text to Uppercase","success");
         }
         let toLowerClick=()=>{
          let newText=text.toLowerCase();
          setText(newText);
          props.showAlert("Text to Lowercase","success");
       }
       let toCapitalizeClick=()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
        props.showAlert("Text capitalized","success");
       }
       let toClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
       }
  return (
    <>
    
<div>
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
</div>
    <div className="form-group my-3">
   <textarea className="form-control"  id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(47 83 119)':'',color:props.mode==='dark'?'white':'black'}}></textarea>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={toUpperClick}>Text to upper</button>
  <button disabled={text.length===0}type="button" className="btn btn-primary my-2 mx-1" onClick={toLowerClick}>Text to Lower</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={toCapitalizeClick}>Text to Capitalize</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={toClearClick}>Clear</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>Total {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Letters </p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length===0?'Nothing to Preview!':text}</p>
  </div>
    </>
  );
}
