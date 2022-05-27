import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function CommentForm(props) {
  return (
    <View style={styles.containerCommentForm}>
        <Text style={styles.title}>Commenter un film </Text>
    <View>
        <Text>Auteur du film</Text>
        <TextInput
            style={[styles.textInput, { height: 40 }]}
            placeholder="author "
            value={props.author}
            onChangeText={props.handleauthorChange}
        />

            <Text>Saisissez votre commentaire</Text>
                <TextInput
                    style={[styles.textInput, { height: 120 }]}
                    multiline
                    placeholder="Content"
                    value={props.content}
                    onChangeText={props.handlecontentChange}
                />

            
        
        </View>
        
        </View>
  )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        width: "90%",
    }
});