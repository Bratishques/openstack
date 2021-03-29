import firebase from "firebase"

const FirebaseInit = () => {

    if (!firebase.apps.length) {
        const FirebaseConfig = {
            apiKey: "AIzaSyAbgSITlmdj5EH15wqiTn7oVat0LoR6h-4",
            authDomain: "somestack-2c862.firebaseapp.com",
            projectId: "somestack-2c862",
            storageBucket: "somestack-2c862.appspot.com",
            messagingSenderId: "418342068423",
            appId: "1:418342068423:web:456a8dd7d0ae4439ce5ee2"
        }
        firebase.initializeApp(FirebaseConfig)
     }else {
        firebase.app(); // if already initialized, use that one
     }
    
}

export default FirebaseInit


export const googleProvider = new firebase.auth.GoogleAuthProvider();