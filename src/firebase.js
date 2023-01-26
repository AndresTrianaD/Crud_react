import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAkflQd_TL9GJFhPnLKabtEVwYcMf50CUM",
    authDomain: "prueba-udec.firebaseapp.com",
    projectId: "prueba-udec",
    storageBucket: "prueba-udec.appspot.com",
    messagingSenderId: "598318990956",
    appId: "1:598318990956:web:a54279d2fcb8d061d83a49",
    measurementId: "G-TCSVEV3D0T"
  };

  export const firebaseApp =firebase. initializeApp(firebaseConfig)