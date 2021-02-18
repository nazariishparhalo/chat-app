import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDz0Cpx77gfsGLfzX-VCvDO7zdEKI--z4I",
    authDomain: "chat-web-app-f5647.firebaseapp.com",
    projectId: "chat-web-app-f5647",
    storageBucket: "chat-web-app-f5647.appspot.com",
    messagingSenderId: "227495898005",
    appId: "1:227495898005:web:fb95b0e54aad4e364b649c"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();