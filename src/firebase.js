// Import the functions you need from the SDKs you need

//Funcion que conecta la app de React con la plataforma de Firebase
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Funcion que me conecta con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

//Mis llaves de acceso a la plataforma de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpRH1nQzdFXL2gdJUiLEFmxo8uEtz0BCg",
  authDomain: "miprimerapp-43575.firebaseapp.com",
  projectId: "miprimerapp-43575",
  storageBucket: "miprimerapp-43575.appspot.com",
  messagingSenderId: "704853070551",
  appId: "1:704853070551:web:ca51200e2f40da7a665692"
};

// Initialize Firebase

//Variable que representa la plataforma en si
const app = initializeApp(firebaseConfig); //FirebaseApp

//console.log(app)

//Variable que representa la pestaña de Firestore Database
export const db = getFirestore(app);