import React from "react";
import DEButton from "./debutton";
import InButtoncontainer from "../Redux/Containers/InButtoncontainer";
function Counter(props) {
  console.log(props)
  return (
    <div className="App">

      <h1>hello</h1>
      <div>
      {/*   <button  onClick={() => props.inCrement(2)}>+</button> */}
      <InButtoncontainer/>

        <h1>{props.counter}</h1>
        <DEButton deCrement={props.deCrement}/>
        
      </div>
     
    </div>
  );
}

export default Counter;
