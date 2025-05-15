import React, { useState } from "react";
import ToyCard from "./ToyCard";

const API_URL = "http://localhost:3001/toys"

function ToyContainer({ toys, setToys }) {

  function deleteToy(toyID) {
    setToys(toys.filter(toy => toy.id !== toyID))
  }

  function updateLikes(updatedToy) {
    setToys(toys.map(toy =>
      toy.id===updatedToy.id ? updatedToy : toy
    ));
  }


  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toys.map(toy=> <ToyCard toy={toy} key={toy.id} updateLikes={updateLikes} deleteToy={deleteToy} />)}
    </div>
  );
}

export default ToyContainer;
