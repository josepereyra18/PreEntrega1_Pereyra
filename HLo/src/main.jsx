import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import categorias from './mocks/categorias.json'

//!FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqFebwkHS2RegjEaeCHmwLydJiQrEBsNU",
  authDomain: "prueba-d323d.firebaseapp.com",
  projectId: "prueba-d323d",
  storageBucket: "prueba-d323d.appspot.com",
  messagingSenderId: "329731032325",
  appId: "1:329731032325:web:a71847850d2ffec87ce36c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore()

// categorias.forEach((categorias)=>{
//   addDoc(collection(db, 'categorias'),categorias)
//   .then((docRef =>{
//     console.log('Documento Agregado con id:', decRef.id)
//   }))
//   .catch((error)=>{
//     console.error("error al agregar documento", error)
//   })
// })





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
