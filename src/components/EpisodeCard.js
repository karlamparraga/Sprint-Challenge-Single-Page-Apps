import React from "react";
import {Card, Icon, Image, Button} from 'semantic-ui-react';

function EpisodeCard (props) {
    console.log("props from EpisodeCard: ", props)
    const {
        id,
        name,
        air_date,
        episode, 
        characters
    } = props.episode

    return(
    <Card.Group>
      <Card key={id}>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{air_date}</Card.Meta>
          <Card.Meta>{episode}</Card.Meta>
          <Card.Description>
            <Button floated='right'>{characters.length} characters</Button>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group> 
    )
}

export default EpisodeCard
