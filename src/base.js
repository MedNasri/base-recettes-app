import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA0jQNwFycn4jmh_YdNvqOOxSQcd89Swzc',
  authDomain: 'recettes-app-a7c5b.firebaseapp.com',
  databaseURL: 'https://recettes-app-a7c5b.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
