import React, { useState, useEffect } from "react";''
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toyData => setToys(toyData))
  }, [])
  console.log(toys)
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
