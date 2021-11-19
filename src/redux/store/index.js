import { createStore, applyMiddleware, compose } from 'redux'

//importing the main reducer that has all the reducers combined
import rootReducer from '../reducers'

import thunk from 'redux-thunk'

import { getFirebase } from 'react-redux-firebase'



//creating store with createStore method that takes in
//the main reducer (rootReducer),
//applyMiddleware adds additional functionality; thunk allows for async requests like interacting with a database; getFirebase lets us access our firebase and perform sync operations
//then exporting it


export default store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})),
    )
 )
