import React, { useState } from 'react';
import { Modal, Text, Button, StyleSheet, View } from 'react-native'
import Fire from '../Fire';
import CommentForm from './CommentForm';

export default function CommentModal(props) {

  const [author, setauthor] = useState("");
  const [content, setContent] = useState("");


  function handleSubmit() {  //récupérer des informations rajoutés au film
    let movieClone = props.movie
    movieClone.comments.push(
      {
        "author": author,
        "content": content,
        "publishedAt": new Date()
      }
    )
    const firebase = new Fire()
    firebase.updateMovie(movieClone)
    props.handleClose()
  }
console.log(props.movie.comments);
  return (
    <Modal visible={props.isCommentModalVisible} animationType="slide">
      {props.movie.comments.map(item =>(
      <View>
        <Text>{item.author}</Text>
        <Text>{item.content}</Text>
        <Text>{item.publishedAt instanceof Date ? item.publishedAt.toLocaleDateString("fr-FR") : item.publishedAt.toDate().toLocaleDateString("fr-FR")}</Text>
        </View>))}
     
      <CommentForm
        author={author}
        content={content}

        handleauthorChange={
          (newauthor) => setauthor(newauthor)
        }

        handlecontentChange={
          (newcontent) => setContent(newcontent)
        }
      />


      <Button title="Valider" onPress={() => handleSubmit()} />

      <Button title="Fermer" onPress={props.handleClose} color="grey"></Button>

    </Modal>

  )










}


