import React from "react";
//import notes from "../notes";

function Footer() {
  var currentYear = displayYear();
  return (
    <div>
    <footer> 
      <p> Copyright {currentYear} </p>
      
    </footer>
    </div>
  );
}

function displayYear() {
  var d = new Date();
  return d.getFullYear();
}


export default Footer;