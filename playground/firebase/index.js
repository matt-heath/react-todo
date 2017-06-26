import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBCcv8VbnD7DySmNg1Y0_8MSCoi5e1qC_s",
  authDomain: "heath-todo-app.firebaseapp.com",
  databaseURL: "https://heath-todo-app.firebaseio.com",
  projectId: "heath-todo-app",
  storageBucket: "heath-todo-app.appspot.com",
  messagingSenderId: "1061491021373"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Matthew',
    age: 21
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val())
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val())
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val())
// });


// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'Walk the dog!'
// });
