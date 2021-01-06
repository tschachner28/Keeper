import React from "react";
import notes from "../notes";
import Note from "./Note";

function App() {
  return (
    <div>
      {notes.map(function (note) {
        return (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
            />
        );
      }
      )}
    </div>
  );
}

export default App;