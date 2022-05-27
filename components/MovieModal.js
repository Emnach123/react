import React, { useState } from 'react';
import { Modal, Text, Button, StyleSheet } from 'react-native';
import Fire from '../Fire';
import MovieForm from './MovieForm';

export default function MovieModal(props) {
  const [title, setTitle] = useState(props.movie ? props.movie.title : "");
  const [synopsis, setSynopsis] = useState(props.movie ? props.movie.synopsis : "");
  const [Url, setUrl] = useState(props.movie ? props.movie.urlImage : "");

  function handleSubmit() {
   const firebase = new Fire();
   let movie = {     //on a un objet Film avec les valeurs saisies par l'utilisateur
     "title": title,
     "synopsis": synopsis,
     "urlImage": Url,
     
   }

   if (props.movie) {  // si on reçoit un film dans le composant, on cherche à le modifier
     movie.id = props.movie.id;
    firebase.updateMovie(movie);
   } else {
     movie.comments = [];
    firebase.addMovie(movie);
   }
   
   
    props.handleClose();
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
    <Text style={styles.title}>{props.movie ? "Modifier" : "Ajouter"} un film</Text>
      <MovieForm
        title={title}
        synopsis={synopsis}
        handleTitleChange={(newTitle) => setTitle(newTitle)}
        handleSynopsisChange={(newSynopsis) => setSynopsis(newSynopsis)}
        handleUrlChange={(newUrl) => setUrl(newUrl)}
        onSubmit={() => handleSubmit()}
      />
      <Button title="Close" onPress={props.handleClose}></Button>
    </Modal>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
});