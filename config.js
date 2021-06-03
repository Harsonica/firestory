import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCUF2xOIR-_QqR9SEZxO3SSqUTNPAeP7rQ",
    authDomain: "libraryapp-60941.firebaseapp.com",
    projectId: "libraryapp-60941",
    storageBucket: "libraryapp-60941.appspot.com",
    messagingSenderId: "1020046772068",
    appId: "1:1020046772068:web:4b88db0a2fa110e895dc71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
