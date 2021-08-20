import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDdPKLPyJZPmr-N2qxe3zaDvdcQ-dAMbc4",
    authDomain: "netflix-clone-229.firebaseapp.com",
    projectId: "netflix-clone-229",
    storageBucket: "netflix-clone-229.appspot.com",
    messagingSenderId: "189928997591",
    appId: "1:189928997591:web:61f71d0ff5e0f9c1516692",
    measurementId: "G-HESZ53JN39"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db