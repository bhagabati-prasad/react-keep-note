import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = () => {
  const [getNote, setgetNote] = useState([]);

  const addItem = (note) => {
    setgetNote(() => [...getNote, note]);
  };

  const onDelete = (id) => {
    setgetNote((oldData) =>
      oldData.filter((currData, ind) => {
        return ind !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote fetchNote={addItem} />
      {getNote.map((val, indx) => {
        return (
          <Note
            key={indx}
            id={indx}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
