import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToys([...toys, newToy])
  }
  function deleteToy(id) {
    setToys(toys.filter(toy=> toy.id !== id ))
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy= {addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
