import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy}) {
  const allToyCards = toys.map((toy)=> {
    return(
      <ToyCard 
      key={toy.id}
      name= {toy.name}
      image= {toy.image}
      likes= {toy.likes}
      deleteToy= {deleteToy}
      id= {toy.id}
      />
    )
  })

  return (
    <div id="toy-collection">
      {allToyCards}
    </div>
  );
}

export default ToyContainer;
