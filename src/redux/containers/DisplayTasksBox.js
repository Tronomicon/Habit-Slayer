import { connect } from 'react-redux';
import TasksList from '../../components/TasksList.js';

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id })
})

//with the two above functions, we can pass in the state variables and functions
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
