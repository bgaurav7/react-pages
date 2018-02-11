import firebase from 'firebase'
import { firebaseConfig } from 'config'

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseRef = firebaseApp

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace

const userTokenKey = 'USER_AUTH_TOKEN';

export const isAuthenticated = () => {
  return !!auth.currentUser && !!window.localStorage.getItem(userTokenKey);
}

export const setLoggedIn = (user) => {
	window.localStorage.setItem(userTokenKey, user.uid);
}

export const setLoggedOut = () => {
	window.localStorage.removeItem(userTokenKey);
}

export const signOut = () => {
	auth.signOut();
}