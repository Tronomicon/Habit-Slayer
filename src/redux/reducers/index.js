import { combineReducers } from 'redux'
import todos from './taskReducer.js'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

export default combineReducers({
    todos,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})
