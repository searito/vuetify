import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAUWSWBK46OQsLOBXwOTJHQPEh4zlg_5rk",
    authDomain: "todo-sear.firebaseapp.com",
    databaseURL: "https://todo-sear.firebaseio.com",
    projectId: "todo-sear",
    storageBucket: "todo-sear.appspot.com",
    messagingSenderId: "360858230384",
    appId: "1:360858230384:web:68203bc42615740d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  //db.settings({ timestampsInSnapshots: true});

  export default db;