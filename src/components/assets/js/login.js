// import firebase from 'firebase'

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBDRSkwxaE8lNtl-MAYW7Zu7ae4-vQZsQk",
//     authDomain: "sugr-4b7b5.firebaseapp.com",
//     databaseURL: "https://sugr-4b7b5.firebaseio.com",
//     projectId: "sugr-4b7b5",
//     storageBucket: "sugr-4b7b5.appspot.com",
//     messagingSenderId: "447320200784"
// };
// firebase.initializeApp(config);

// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();
// export default firebase;

// // // Variable to reference the database
// // var fullName;
// // var email;

// // Get all elements from HTML file
// const textEmail = $("#email");
// const textPassword = $("#password");
// const btnLogin = $("#btnLogin");
// const btnSignUp = $("#btnSignUp");
// const btnLogout = $("#btnLogout");

// // Add login event
// btnLogin.click(function() {
//     console.log("clicked login btn");
//     const email = textEmail.val();
//     console.log(email)
//     const password = textPassword.val();
//     const auth = firebase.auth();

//     // Sign In
//     const promise = auth.signInWithEmailAndPassword(email, password);

//     promise.catch(e => console.log(e.message));

// });

// // Login function to export
// // function btnLogin (){
// //     const auth = firebase.auth();

// //     // Sign In
// //     const promise = auth.signInWithEmailAndPassword(email, password);

// //     promise.catch(e => console.log(e.message));

// // }

// // Add signup event
// btnSignUp.click(function() {
//     console.log("clicked login btn");
//     const email = textEmail.val();
//     console.log(email)
//     const password = textPassword.val();
//     const auth = firebase.auth();

//     // Create User
//     const promise = auth.createUserWithEmailAndPassword(email, password);

//     promise.catch(e => console.log(e.message));

// });

// btnLogout.click(function(e) {
//     console.log("clicked logout");

//     firebase.auth().signOut();

// })

// // Add a realtime listener
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         console.log(firebaseUser);
//         btnLogout.removeClass('hide');
//     } else {
//         console.log("You are not logged in");
//         btnLogout.addClass('hide')
//     }
// })
