import React from "react";
import { useState } from "react";

function ToyForm({addNewToy}) {
const [toyName, setToyName]= useState("")
const [toyImage, setToyImage]= useState("")

function handleToyName(e) {
  setToyName(e.target.value)
  
}
function handleToyImage(e) {
  setToyImage(e.target.value)
}
function handleSubmit(e){
  e.preventDefault()
  const newToy= {
    id : toyName,
    name : toyName,
    image : toyImage,
    likes : 0
    
  }
  addNewToy(newToy)
}

  return (
    <div className="container">
      <form className="add-toy-form" 
        onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange= {handleToyImage}
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
