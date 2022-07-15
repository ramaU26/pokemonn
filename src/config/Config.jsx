import  firebase  from  'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCFUP8jtf1lW-LFX9hUw_f5Gthmb-KrExM",
    authDomain: "pokemon-data-f940b.firebaseapp.com",
    projectId: "pokemon-data-f940b",
    storageBucket: "pokemon-data-f940b.appspot.com",
    messagingSenderId: "921797177607",
    appId: "1:921797177607:web:02886c139a7759324195a2",
    measurementId: "G-MEDT6BCVQB"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();


    export { auth, db, storage };