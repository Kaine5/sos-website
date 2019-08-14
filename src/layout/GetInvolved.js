import React from "react";
import Header from "./Header";

function GetInvolved() {
  return (
      <div className="App">
      <Header />

    <div className="container">
      <div className="item-1">
        <h1 className="topic">
          
          <span className="green">Business</span> <br></br>
          <span className="red">Design</span>   <br></br>          
          <span className="yellow">Tech</span>  <br></br>
        
        </h1>

      </div>

      <div class="item-2"> 
        <p className="paragrath">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="button">learn  <br></br>
        more</div>
      </div>
    </div>


    </div>
  );
}

export default GetInvolved;
