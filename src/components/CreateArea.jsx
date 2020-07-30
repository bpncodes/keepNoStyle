import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  })

  function updateTitle(event) {
    const { value, name } = event.target;
    setFullNote((prev) => {
      return {
        ...prev,
        [name]: value
      }
    }
    );
  }

  function updateList(event){
    if(fullNote.title==="" || fullNote.content===""){
      return
    }
    props.updateNoteListParent(fullNote.title, fullNote.content);
    setFullNote({title:"",content:""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input required onChange={updateTitle} value={fullNote.title} name="title" placeholder="Title" />
        <textarea required onChange={updateTitle} value={fullNote.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={updateList}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


// 1. Create Area works! 