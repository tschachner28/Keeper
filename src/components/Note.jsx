import React from "react";
import notes from "../notes";
/*
function Note() {
  return (
    <div class="note">
      <h1>
        This is the note title.
      </h1>
      <p>
        This is the note content.
      </p>
    </div>
  );
}
*/
function Note(props) {
  return (
    <div class="note">
      <h1> {props.title} </h1>
      <p> {props.content} </p>
    </div>
  );
}


export default Note;