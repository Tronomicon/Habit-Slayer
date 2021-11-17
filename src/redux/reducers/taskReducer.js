//handles two actions, to add the todo or mark (toggle) as complete or not
const taskReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_TODO':
          //return a new array that has the origial todo's and then adding a new todo with updated text
          //console.log(action.text)
          return [
              ...state, {
                  id: action.content.task_id,
                  text: action.content.task_text,
                  completed: false
              }
          ]
      case 'TOGGLE_TODO':
          //getting each todo
          return state.map(todo =>
              //if the id of the todo matches the action...
              (todo.id === action.id)
                    //pass in that todo and update it's completed value to its opposite
                  ? { ...todo, completed: !todo.completed } :
                  todo)
      default:
          return state
  }
}

export default taskReducer
