import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

import {styles} from '../styles/taskHubStyles.js';
import Task from '../components/Tasks.js';

//props needed are the todos list and toggleTodo method
//for each todo, display as a toucable button
//if it is completed, it will show as crossed out
const TasksList = ({ todos, toggleTodo }) => (

    <ScrollView
    contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'
    >
      {/*View Tasks Section*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionHeader}>Today's Tasks</Text>
        {
          todos == undefined ? console.log("Todos is undefined.") :
          todos.map((todo) => {
            return (
              <TouchableOpacity key={todo.id}  onPress={() =>  toggleTodo(todo.id)}>
                <Task key={todo.id.toString()} text={todo.text}/>
              </TouchableOpacity>

          )})
        }


      </View>
    </ScrollView>
)
export default TasksList;
