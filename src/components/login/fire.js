import firebase from "firebase";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDxuzLNIZ_uKVh4EE-GDwnjTBoPWOQfdRw",
    authDomain: "moviesapp-dbd4b.firebaseapp.com",
    projectId: "moviesapp-dbd4b",
    storageBucket: "moviesapp-dbd4b.appspot.com",
    messagingSenderId: "516110082956",
    appId: "1:516110082956:web:45b190f7431a5986f5aca9",
    measurementId: "G-CJDEHCEDBZ"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;