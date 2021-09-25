import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyB7INOeEzf0twJUGddc5AQoXlhgLO_kYtg",
    authDomain: "financial-life-6dcd9.firebaseapp.com",
    projectId: "financial-life-6dcd9",
    storageBucket: "financial-life-6dcd9.appspot.com",
    messagingSenderId: "436483507616",
    appId: "1:436483507616:web:65f7349495c8b7a90e90c5",
    measurementId: "G-C2TMFEZ8JW"
};

firebase.initializeApp(firebaseConfig)
export default firebase