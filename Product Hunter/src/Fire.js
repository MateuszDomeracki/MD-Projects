import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyB7g7tBxBSaaxWlraHIRD4dMtB7FV3OlSE",
  authDomain: "producthunter-82152.firebaseapp.com",
  databaseURL: "https://producthunter-82152.firebaseio.com",
  projectId: "producthunter-82152",
  storageBucket: "producthunter-82152.appspot.com",
  messagingSenderId: "34466509697"
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
