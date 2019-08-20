import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.js"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then(characters => {
      console.log("characters: ", characters);
      setCharacter(characters.results);
    })
    .catch(err => console.log("error fetching data"))
  }, []);

  console.log('char', characters)

  return (
    <section className="character-list grid-view">
      
      {characters.map(character => (
        <CharacterCard character={character}/>
      ))}

    </section>
  );
}
