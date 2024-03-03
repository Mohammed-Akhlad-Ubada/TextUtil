import React from 'react';

export default function About(props) {
    let mystyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'rgb(47 83 119)':'white',
      border:props.mode==='dark'?'1px solid white ':'1px solid black'
    }
  return (
    <>
<div className="container my-2" >
<h1 style={{color:props.mode==='dark'?'white':'black'}}>About</h1>
<div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className="accordion-item"  style={mystyle}>
    <h2 className="accordion-header" id="flush-headingOne" >
      <button  style={{ color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'rgb(47 83 119)':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div  id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div style={mystyle}  className="accordion-body">Dive deep into your written content with our text analysis tools. From word count and readability analysis to sentiment analysis and keyword extraction, our tools offer valuable insights to help you understand and optimize your text.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="flush-headingTwo" >
      <button style={{ color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'rgb(47 83 119)':'white'}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div  id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div style={mystyle}  className="accordion-body">We believe in making powerful text analysis tools accessible to everyone. That's why all our tools are completely free to use. No subscriptions, no hidden fees – just unlimited access to essential text processing utilities.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="flush-headingThree" >
      <button  style={{ color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'rgb(47 83 119)':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div  id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div style={mystyle} className="accordion-body">Our platform is designed to be seamlessly compatible with all major web browsers. Whether you prefer Chrome, Firefox, Safari, or any other browser, you can access TextUtils anytime, anywhere.</div>
    </div>
  </div>
</div>

</div>

     
    </>
   
  );
}
