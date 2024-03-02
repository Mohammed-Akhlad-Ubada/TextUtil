import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,Routes,
//   Route
// } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled","success");
      document.title="TextUtil-Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtil-Dark Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtil now"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='';
      showAlert("Light mode enabled","success");
      document.title="TextUtil-Light Mode";
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({message:message,type:type});
   setTimeout(()=>{
setAlert(null);
   },2000);
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtil"  mode={mode} toggle={toggleMode} aboutText="About"/>
    <Alert alert={alert} />
    {/* <Routes>
    <Route path='/about' element={<About></About>}></Route> */}
          {/* <Route path="/" element={*/}
          <div className="container">
    <Textform title="Enter your text here" mode={mode} showAlert={showAlert}/></div>
    {/* </div>}></Route> */}
     {/* </Routes>
        </Router> */}
    </>
  );
}
//This is compiled by babel
export default App;
