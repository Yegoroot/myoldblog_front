import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from 'src/config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
