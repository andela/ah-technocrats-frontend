import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDNk3ytSY3zUhjMdxVk3SfH-0Yh17I1qrs',
  authDomain: 'authors-haven-224511.firebaseapp.com',
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
