import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([]);

  function updateNoteList(topic, desc) {
    setNoteList(
      (prev) => {
        return [
          ...prev,
          {
            title: topic,
            content: desc
          }
        ]
      }
    )
  }

  function DeleteNote(id) {
    setNoteList(
      (prev) => {
        return prev.filter((value, index) => {
          return index !== id;
        })
      }
    )
  }

  return (
    <div>
      <Header />
      <CreateArea updateNoteListParent={updateNoteList} />
      {noteList.map((list, index) =>
        <Note key={index} id={index} title={list.title} content={list.content} delFun={DeleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;