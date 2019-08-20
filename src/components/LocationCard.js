import React from "react";
import {Card, Button} from 'semantic-ui-react';

export default function LocationCard(props) {

  const {
    id, name, type, dimension, residents 
  } = props.location

  console.log("props in LocationCard: ", props)

  return (
    <span>
    
    <Card.Group>
      <Card key={id}>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{type} - {dimension}</Card.Meta>
          <Card.Description>
            <Button floated='right'>{residents.length} residents</Button>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>

    </span>
  );
}
