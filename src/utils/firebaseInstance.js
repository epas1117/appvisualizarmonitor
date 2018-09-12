import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEMPE0Fq8_5CzlXj754KyQuybm8lN23L0",
    authDomain: "appvisualizarimagenesmonitor.firebaseapp.com",
    databaseURL: "https://appvisualizarimagenesmonitor.firebaseio.com",
    projectId: "appvisualizarimagenesmonitor",
    storageBucket: "appvisualizarimagenesmonitor.appspot.com",
    messagingSenderId: "1064280677074"
};
export default firebase.initializeApp(config);
