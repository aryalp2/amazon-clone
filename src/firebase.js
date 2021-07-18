import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDHgQnpaluUvmhkUof9eji0LyQe8lIe8ec',
	authDomain: 'challenge-13c96.firebaseapp.com',
	projectId: 'challenge-13c96',
	storageBucket: 'challenge-13c96.appspot.com',
	messagingSenderId: '183640727740',
	appId: '1:183640727740:web:682810f0baa05f75be70b9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
