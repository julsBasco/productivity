import React, { useState, useEffect } from "react";

const App = () => {
  const [todoEntries, setTodoEntries] = useState([]);
  const [todoEntry, setTodoEntry] = useState("");

  const generateEntries = () => {
    setTodoEntries((prevArray) => [
      ...prevArray,
      <div>
        <div>
          <h1>{todoEntry}</h1>
          <div className="productivityBoxButtons">
            <button className="editButton">edit</button>
            <button className="deleteButton">delete</button>
          </div>
        </div>
      </div>,
    ]);
  };

  return (
    <div>
      <p>What do you want to do?</p>
      <input id="entryBox" onChange={(e) => setTodoEntry(e.target.value)} />
      <button onClick={generateEntries}>enter entry</button>
      <h1>this is the entry</h1>
      {todoEntries}
    </div>
  );
};

export default App;
