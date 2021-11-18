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
const TasksList = ({ tasks, toggleTodo, removeTask }) => {
    //console.log("Tasks from TaskList.js", tasks),
    const handleTaskPressed = (id) => {

      //console.log(id)
      toggleTodo(id);
      removeTask(id);
    };

    return (
      <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps='handled'
      >
        {/*View Tasks Section*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionHeader}>Today's Tasks</Text>
          {
            tasks == undefined ? console.log("Todos is undefined.") :
            tasks.map((task) => {
              return (
                <TouchableOpacity key={task.task_id}  onLongPress={() => handleTaskPressed(task.id)}>
                  <Task key={task.task_id} text={task.task_text} date={task.date_created}/>
                </TouchableOpacity>

            )})
          }


        </View>
      </ScrollView>
    )

}
export default TasksList;
