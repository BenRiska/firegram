import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyClNWuV0pwb4thmkVnN5h8AODUFOhhdCiA",
  authDomain: "firegram-6031f.firebaseapp.com",
  databaseURL: "https://firegram-6031f.firebaseio.com",
  projectId: "firegram-6031f",
  storageBucket: "firegram-6031f.appspot.com",
  messagingSenderId: "777752438266",
  appId: "1:777752438266:web:8af0ef67166053cc443043",
  measurementId: "G-PTSSRF97RJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
