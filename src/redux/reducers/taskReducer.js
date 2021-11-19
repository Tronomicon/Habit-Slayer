//handles two actions, to add the todo or mark (toggle) as complete or not
const taskReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_TODO':
          //return a new array that has the origial todo's and then adding a new todo with updated text
          //console.log(action.text)
          return [
              ...state, {
                  task_id: action.content.task_id,
                  task_text: action.content.task_text
              }
          ]
      case 'TOGGLE_TODO':
          //getting each todo
          return state.map(task =>
              //if the id of the todo matches the action...
              (task.id === action.task_id)
                    //pass in that todo and update it's completed value to its opposite
                  ? { ...task, completed: !task.completed } :
                  task)
      case 'REMOVE_TASK':
        console.log("Task Removed")
        return state;
      case 'TOGGLE_ISCOMPLETED':
        console.log("Task Toggled")
        return state;
      case 'UPDATE_TASK_EXP':
        console.log('Exp updated')
        return state;
      default:
          return state
  }
}

export default taskReducer
