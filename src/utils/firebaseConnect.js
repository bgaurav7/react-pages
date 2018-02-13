import firebase from 'firebase'
import { firebaseConfig } from 'config'

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseRef = firebaseApp

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace