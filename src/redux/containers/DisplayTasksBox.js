import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import TasksList from '../../components/TasksList.js';
import {removeTask} from '../actions'
import {toggleTodo} from '../actions'

//contains the variables/states from redux we want to have access too in our applicaton (TasksList)
//state is usually just the redux store but b/c firestoreConnect() it also contains data from the Tasks collection on firestore
const mapStateToProps = state => {
    //console.log(state)
    const tasks = state.firestore.ordered.Tasks;
    return {
      tasks: tasks
    };
}

//contains the functions from the redux store that we want connected to the application (TasksList)
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id }),
    removeTask: (task_id) => dispatch(removeTask(task_id))

})


export default compose(
  firestoreConnect(() => [ {collection: 'Tasks', orderBy: ['date_created', 'desc'] } ]), // sync Tasks collection from Firestore into redux
  connect(mapStateToProps, mapDispatchToProps)
)(TasksList)
