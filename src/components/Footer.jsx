import React from "react";
//import notes from "../notes";

function Footer() {
  var currentDate = displayDate();
  return (
    <div>
    <footer> Copyright 2021
      
    </footer>
    </div>
  );
}

function displayDate() {
  var d = new Date();
  return d.getFullYear();
}


export default Footer;