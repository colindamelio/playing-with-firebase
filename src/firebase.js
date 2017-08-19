import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCEne67V4DDN6mgpSH7ZfqkimArPvY8Gqk",
  authDomain: "fun-with-fb-app.firebaseapp.com",
  databaseURL: "https://fun-with-fb-app.firebaseio.com",
  projectId: "fun-with-fb-app",
  storageBucket: "",
  messagingSenderId: "484175291219"
};
firebase.initializeApp(config);

export default firebase;
