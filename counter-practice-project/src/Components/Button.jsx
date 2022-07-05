import React from "react";

export default function Button(props){
   const handleClick=(event)=>{
    props.increamentBy(event.target.value);
   }
    return(
        <div>
            <button onClick={handleClick} value={1}>+1</button> 
            <button onClick={handleClick} value={-1}>-1</button>
        </div>
    )
}