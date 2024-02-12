import firebase from  'firebase/app'
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGV4DEFGYGMaDx0kQDN86m90b8k_9mQ0c",
    authDomain: "chat-react-3258a.firebaseapp.com",
    projectId: "chat-react-3258a",
    storageBucket: "chat-react-3258a.appspot.com",
    messagingSenderId: "390880430714",
    appId: "1:390880430714:web:4ff4584c88694bb12009c3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db =  firebase.firestore();
const auth = firebase.auth()
const provider = new  firebase.auth.GoogleAuthProvider()

export {db, auth, provider}