import React ,{useState}from 'react';

export default function About() {
    const[myStyle,setStyle]=useState({color:'black',backgroundColor:'white', border:'1px solid black'});
    const[bText,setBText]=useState("Dark mode")
    let changeMode=()=>{
if(myStyle.color==='black')
{
    let newStyle={color:'white',backgroundColor:'black', border:'1px solid red'};
    setStyle(newStyle);
    setBText("Light mode");
}
else{
    setStyle({color:'black',backgroundColor:'white', border:'1px solid black'});
    setBText("Dark mode");
}
    }
  return (
    <>
     <div className="container">
     <div class="jumbotron" style={myStyle}>
  <h1 class="display-4" >Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"></hr>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <button className='btn btn-secondary' onClick={changeMode}>{bText}</button>
</div>
</div>
    </>
   
  );
}
