import { createStore } from 'redux'

//importing the main reducer that has all the reducers combined
import rootReducer from '../reducers'

//creating store with createStore method that takes in the main reducer (rootReducer)
//then exporting it
export default store = createStore(rootReducer)
