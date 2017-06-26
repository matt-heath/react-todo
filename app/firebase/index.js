import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBCcv8VbnD7DySmNg1Y0_8MSCoi5e1qC_s",
    authDomain: "heath-todo-app.firebaseapp.com",
    databaseURL: "https://heath-todo-app.firebaseio.com",
    projectId: "heath-todo-app",
    storageBucket: "heath-todo-app.appspot.com",
    messagingSenderId: "1061491021373"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
