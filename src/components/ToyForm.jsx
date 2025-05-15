import React, { useState } from "react";

const API_URL = "http://localhost:3001/toys"

function ToyForm({ toys, setToys }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function hanldeNameChange(e) {
    setName(e.target.value);
  }

  function hanldeImageChange(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newListing = {
      name: name,
      image: image,
      likes: 0
    }
    fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newListing)
    })
      .then(res => res.json())
      .then(newToys => setToys([...toys, newListing]))
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={hanldeNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={hanldeImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
