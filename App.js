import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AddButton from './components/AddButton';
import { useState, useEffect } from "react";
import MovieModal from './components/MovieModal';
import Fire from './Fire';
import MovieCard from './components/MovieCard';
import CommentModal from './components/CommentModal';
//import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';
//import { ActivityIndicator } from 'react-native-paper';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isCommentVisible, setIsCommentVisible] = useState(null);

console.log(selectedMovie)

  useEffect(() => {
    const firebase = new Fire(); //création d'une constante firebase
    firebase.getMovies(movies => {  //méthode qui récupère tous les films
    console.log(movies);
    setMovies(movies);
    setLoading(false);
    });
  }, [])

console.log(isCommentVisible);
  //console.log(movies, loading);
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Bienvenue sur My Movies :)
      </Text>
      {loading && <ActivityIndicator />}
      {movies.map(movie => (
        <MovieCard handleUpdate={() => {setSelectedMovie(movie); setIsModalVisible(true)}} key={movie.id} movie={movie}
                  handleComment= { () => {setSelectedMovie(movie); setIsCommentVisible(true)}} />
      ))}

      <AddButton content="Ajouter un film" handlePress={() => { setIsModalVisible(true) }} />
      {
        isModalVisible && (
          <MovieModal
          movie={selectedMovie}
           isVisible={isModalVisible} 
           handleClose={() => { setIsModalVisible(false) }} 
           />
        )
      }

{         isCommentVisible && (
          <CommentModal
           movie={selectedMovie}
           isVisible={isCommentVisible} 
           handleClose={() => { setIsCommentVisible(false) }} 
           />
        )}


    
     
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: "royalblue",
    fontSize: 50,
    fontWeight: "900"
  },
});