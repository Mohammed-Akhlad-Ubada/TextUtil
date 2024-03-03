import React from 'react';

function Alert(props) {
    const capitalize=(words)=>{
    const res=words;
    return res.charAt(0).toUpperCase()+res.slice(1);
    }
  return (
<div style={{height:60}}>
{props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
    <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
    
  </div>}
  </div>
  );
}

export default Alert;
