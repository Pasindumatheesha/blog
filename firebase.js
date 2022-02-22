let firebaseConfig = {
    apiKey: "AIzaSyBcPhDRv6M5V5nmf4lAcLB0vwM6xc2oa3k",
    authDomain: "blogging-website-7867a.firebaseapp.com",
    projectId: "blogging-website-7867a",
    storageBucket: "blogging-website-7867a.appspot.com",
    messagingSenderId: "1021098785380",
    appId: "1:1021098785380:web:916bd79db6367d1522fd71"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();