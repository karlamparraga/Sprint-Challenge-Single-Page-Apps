import React, {useState, useEffect}  from "react";

function CharacterCard() {

  const [characters, setCharacter] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then(characters => {
      console.log("characters: ", characters);
      setCharacter(characters.name);
    })
    .catch(err => console.log("error fetching data"))
  }, []);

  return (
  
  <span>todo: character</span>);
}

export default CharacterCard;
