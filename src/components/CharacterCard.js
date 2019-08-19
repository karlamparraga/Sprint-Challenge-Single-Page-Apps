import React, {useState, useEffect}  from "react";
import {Card, Icon, Image} from 'semantic-ui-react';

function CharacterCard() {

  const [characters, setCharacter] = useState([])

  useEffect(() => {
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
  
  <span>
    {characters.map(character => (
    <Card key={character.id}>
    <Image src={character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{character.name}</Card.Header>
      <Card.Meta>{character.status}</Card.Meta>
      <Card.Description>
        {character.location.name}
        {character.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
  </Card>
    ))}

  </span>);
}

export default CharacterCard;
