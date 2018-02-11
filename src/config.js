import firebase from 'firebase'

// firebase config
export const firebaseConfig = {
	apiKey: "AIzaSyCgRpwvNdIrNoKWmTKJQbzoWwxNJc8Ifhg",
	authDomain: "react-pages.firebaseapp.com",
	databaseURL: "https://react-pages.firebaseio.com/",
}


export const firebaseSignInOptions = [
	firebase.auth.EmailAuthProvider.PROVIDER_ID,
	firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	firebase.auth.GithubAuthProvider.PROVIDER_ID,
]