import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBHghgIuyrVYy_jLWMD-Fu5SjJXVCpajYc",
    authDomain: "itp-ict2111-team-8.firebaseapp.com",
    databaseURL: "https://itp-ict2111-team-8.firebaseio.com",
    projectId: "itp-ict2111-team-8",
    storageBucket: "itp-ict2111-team-8.appspot.com",
    messagingSenderId: "562187027249",
    appId: "1:562187027249:web:bc489fb1c4fd84b4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
// export const auth = firebase.auth();
// export const database = firebase.database();