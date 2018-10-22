import Firebase from 'firebase';
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCthE-l9V1CPzLzADOWeBi_SulUkcle2gY",
    authDomain: "my-first-firebase-ec1e0.firebaseapp.com",
    databaseURL: "https://my-first-firebase-ec1e0.firebaseio.com",
    projectId: "my-first-firebase-ec1e0",
    storageBucket: "my-first-firebase-ec1e0.appspot.com",
    messagingSenderId: "808796704453"
})

export const db = firebaseApp.database()
export const app = firebaseApp