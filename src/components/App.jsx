import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys"
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  //console.log("toys:", toys)

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
