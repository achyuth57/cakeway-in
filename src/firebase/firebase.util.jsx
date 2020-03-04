import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWZHns_I_ayYeWZbBRrLf7Vn8T0KdaaFQ",
  authDomain: "appachyuth.firebaseapp.com",
  databaseURL: "https://appachyuth.firebaseio.com",
  projectId: "appachyuth",
  storageBucket: "appachyuth.appspot.com",
  messagingSenderId: "648972452944",
  appId: "1:648972452944:web:d154acb0c08ed936cf3d55",
  measurementId: "G-WVG7PR0NJW"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
