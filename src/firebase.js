import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBDRSkwxaE8lNtl-MAYW7Zu7ae4-vQZsQk",
    authDomain: "sugr-4b7b5.firebaseapp.com",
    databaseURL: "https://sugr-4b7b5.firebaseio.com",
    projectId: "sugr-4b7b5",
    storageBucket: "sugr-4b7b5.appspot.com",
    messagingSenderId: "447320200784"
};
firebase.initializeApp(config);


export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth