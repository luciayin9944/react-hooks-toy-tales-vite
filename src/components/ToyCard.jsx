//import React, { useState } from "react";


const API_URL = "http://localhost:3001/toys"

function ToyCard({ toy, deleteToy, updateLikes }) {
  function handleDelete() {
    // fetch(API_URL, {
    fetch(`${API_URL}/${toy.id}`, {
      method:"DELETE"
    })
    .then(res => res.json())
    .then(deleteToy(toy.id))
    .catch(err => console.error("Delete failed:", err.message));
  }

  // function handleClickLikes() {
  //   ++toy.likes;
  // }

  function handleClickLikes() {
    fetch(`${API_URL}/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: toy.likes+1})
    })
    .then(res => res.json())
    .then(updatedToy => updateLikes(updatedToy))
    .catch(err => console.error("Like update failed:", err.message));
  }


  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleClickLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
