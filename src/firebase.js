import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCtdPC4kpBjY3ZQ3kmAluH5nbazIT-wYU8",
    authDomain: "react-slack-clone-8b134.firebaseapp.com",
    databaseURL: "https://react-slack-clone-8b134.firebaseio.com",
    projectId: "react-slack-clone-8b134",
    storageBucket: "react-slack-clone-8b134.appspot.com",
    messagingSenderId: "947191631596"
  };
  firebase.initializeApp(config);

  export default firebase;