import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function MovieForm(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Titre du Movie</Text>
                <TextInput
                    style={[styles.textInput, { height: 40 }]}
                    placeholder="Saisissez un titre"
                    value={props.title}
                    onChangeText={props.handleTitleChange}
                />
                <Text>Synopsis</Text>
                <TextInput
                    style={[styles.textInput, { height: 120 }]}
                    multiline
                    placeholder="Le synopsis du film"
                    value={props.synopsis}
                    onChangeText={props.handleSynopsisChange}
                />
                <Text>Poster du Film</Text>
                <TextInput
                style={[styles.textInput, { height: 40 }]}
                value={props.url}
                onChangeText={props.handleUrlChange}
                placeholder="l'URL de l'image"
                />
            </View>
            <Button title="Valider" onPress={props.onSubmit} />
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