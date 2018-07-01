import firebase from 'firebase'
import 'firebase/firestore'
import config from './../util/firebaseConfig'
const firebaseApp = firebase.initializeApp(config)

const settings = { timestampsInSnapshots: true }
const firestore = firebaseApp.firestore()
firestore.settings(settings)

export default (!firebase.apps.length ? firebase.app() : firestore)

// export default firestore
