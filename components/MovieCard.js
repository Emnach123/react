import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Fire from '../Fire';




export default function MovieCard(props) {
  function deleteMovie() {
    const firebase = new Fire();
    firebase.deleteMovie(props.movie);
  }
  return (
    <Card>
   
    <Card.Content>
      <Title>{props.movie.title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.movie.urlImage }} />
    <Paragraph>{props.movie.synopsis}</Paragraph>
    <Card.Actions>
      <Button onPress={props.handleUpdate}>Modifier</Button>
      <Button onPress={() => deleteMovie()}>Supprimer</Button>
      <Button onPress={props.handleComment}>Commenter</Button>

      
    </Card.Actions>
  </Card>
  )
}