import { ADD_TODO, REMOVE_TASK, TOGGLE_ISCOMPLETED, UPDATE_TASK_EXP, UPDATE_ACHIEVEMENTS} from './actionTypes'

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
        date_created: new Date(),
        isCompleted: false,
        task_experience: 2
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

export const toggleIsCompleted = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("Tasks")
      .doc(task.id)
      .update({
        isCompleted: !task.isCompleted
      })
      .then(() => {
        dispatch({
          type: TOGGLE_ISCOMPLETED
        });
      })
  }
}

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

export const updateTaskExp = (task, newExp) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("Tasks")
      .doc(task.id)
      .update({
        task_experience: newExp
      })
      .then(() => {
        dispatch({
          type: UPDATE_TASK_EXP
        });
      })
  }
}

export const updateAchievements = (task, achievements, newDatesArray) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("Achievements")
      .doc('User_1')
      .update({
        datesOfCompletedTasks: newDatesArray,
        numOfCompletedTasks: achievements.numOfCompletedTasks + 1,
        total_exp: achievements.total_exp + task.task_experience
      })
      .then(() => {
        dispatch({
          type: UPDATE_ACHIEVEMENTS
        });
      })
  }
}
