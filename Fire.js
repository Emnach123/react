import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAddqRNaz2K0lv7LsxdDKT-NE7OV59rtjc",
  authDomain: "my-movies-2dd6e.firebaseapp.com",
  projectId: "my-movies-2dd6e",
  storageBucket: "my-movies-2dd6e.appspot.com",
  messagingSenderId: "652322532428",
  appId: "1:652322532428:web:d0dc55bc7ef24bbb52d8e9"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {
    getMovies(callback) {
        const q = query(collection(db, 'movies'), orderBy('title', 'asc'));
        onSnapshot(q, (snapshot) => {
            let movies = [];
            snapshot.forEach(doc => {
                movies.push({ id: doc.id, ...doc.data() });
            });
            callback(movies);
        });
    }

    addMovie(movie) {
        addDoc(collection(db, 'movies'), movie);
    }

    updateMovie(movie) {
        updateDoc(doc(db, 'movies', movie.id), movie);
    }

    deleteMovie(movie) {
        deleteDoc(doc(db, 'movies', movie.id))
    }
}

