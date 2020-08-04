import React, { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const onchangeHandler = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const addNote = (event) => {
    if (note.content == "") {
      alert("Empty content field");
    } else {
      props.fetchNote(note);
    }
    setNote({ title: "", content: "" });
    event.preventDefault();
  };

  const expandField = () => {
    setExpand(true);
  };
  const hideField = () => {
    setExpand(false);
  };

  return (
    <section className='create_note'>
      <div className='form_box'>
        <form>
          <input
            onChange={onchangeHandler}
            value={note.title}
            type='text'
            name='title'
            placeholder='Title of the note'
            onClick={expandField}
            onDoubleClick={hideField}
          />
          {expand ? (
            <textarea
              onChange={onchangeHandler}
              value={note.content}
              name='content'
              placeholder='Describe your content...'
            ></textarea>
          ) : null}
          {expand ? (
            <button onClick={addNote}>
              <i class='fa fa-plus' aria-hidden='true'></i>
            </button>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default CreateNote;
