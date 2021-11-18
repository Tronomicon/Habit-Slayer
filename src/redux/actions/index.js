import { ADD_TODO, TOGGLE_TODO, REMOVE_TASK } from './actionTypes'

// //without Thunk just returning an action object
// export const addTodo = (text, id) => ({
//     type: ADD_TODO,
//     id,
//     text
// })

// with thunk, returns a function
export const addTodo = (content) => {
  //Parameters: dispatch method, getState to state of store
  //halts dispatch
  return (dispatch, getState, {getFirebase}) => {
    //make async call to database
    const firestore = getFirebase().firestore();
    firestore
      .collection("Tasks")
      .add({
        ...content,
        date_created: new Date()
      })
      .then( () => {
        //resuming dispatch
        dispatch({
          type: ADD_TODO,
          content,
        });
      })
  }
}

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const removeTask = (id) => {
  return (dispatch, getState, {getFirebase}) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("Tasks")
      .doc(id)
      .delete()
      .then( () => {
        dispatch({
          type: REMOVE_TASK,
        });
      })
  }
}
