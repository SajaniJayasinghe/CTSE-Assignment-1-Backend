// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0KS8pGJl5HgC_Du_MCZ3hFnEOwNdpr4A",
  authDomain: "ctse-3a25c.firebaseapp.com",
  projectId: "ctse-3a25c",
  storageBucket: "ctse-3a25c.appspot.com",
  messagingSenderId: "800138857746",
  appId: "1:800138857746:web:7dc787265e02dd95ed77cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
