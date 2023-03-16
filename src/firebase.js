import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAapefSkWaYdDz5c4ygm7gBaj24iUxcgKo",
    authDomain: "chat-app-38ddd.firebaseapp.com",
    projectId: "chat-app-38ddd",
    storageBucket: "chat-app-38ddd.appspot.com",
    messagingSenderId: "714634737958",
    appId: "1:714634737958:web:e9f0bb6b992085916aa9e7"
  };

//this line of code connects everthing
  const firebaseApp = firebase.initializeApp(firebaseConfig);

//this is for database connection
  const db = firebaseApp.firestore();
  
  //authentication
  const auth = firebase.auth();  
  const provider =  new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;