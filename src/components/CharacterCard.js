import React from "react";
import {Card, Icon, Image} from 'semantic-ui-react';

function CharacterCard(props) {

  console.log('props in CharacterCard', props)

  const {
    id,
    image,
    name, 
    status,
    location,
    origin
  } = props.character
  
  return (
  
  <span>

    <Card key={id}>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{status}</Card.Meta>
      <Card.Description>
        {location.name}
        {origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
    </Card>

  </span>);
}

export default CharacterCard;
