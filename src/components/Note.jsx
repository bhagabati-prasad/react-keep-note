import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className='note'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={deleteNote}>
          <i class='fa fa-trash' aria-hidden='true'></i>
        </button>
      </div>
    </>
  );
};

export default Note;
