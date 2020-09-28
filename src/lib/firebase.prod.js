import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBcbWuFna_tm0OlHNhHov64W2BuIIv4HUY',
  authDomain: 'netflix-clone-557fe.firebaseapp.com',
  databaseURL: 'https://netflix-clone-557fe.firebaseio.com',
  projectId: 'netflix-clone-557fe',
  storageBucket: 'netflix-clone-557fe.appspot.com',
  messagingSenderId: '863826753968',
  appId: '1:863826753968:web:daf29096c785ab45dd3e75',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
