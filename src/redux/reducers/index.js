import { combineReducers } from 'redux'
import taskReducer from './taskReducer.js'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

export default combineReducers({
    tasks: taskReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})
