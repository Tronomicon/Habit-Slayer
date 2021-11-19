import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

import {styles} from '../styles/taskHubStyles.js';
import { useNavigation } from '@react-navigation/native';
import Task from '../components/Tasks.js';


//props needed are the todos list and toggleTodo method
//for each todo, display as a toucable button
//if it is completed, it will show as crossed out
const TasksList = ({ tasks, toggleTodo, removeTask }) => {
    //console.log("Tasks from TaskList.js", tasks),
    const navigation = useNavigation();


    const handleLongPressed = (task) => {
      removeTask(task.id);
    }

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
                <TouchableOpacity key={task.id}
                  onPress={() => navigation.navigate('TaskWorkRoom', {task: task})}
                  onLongPress={() => handleLongPressed(task)}>
                  <Task text={task.task_text} date={task.date_created} isCompleted={task.isCompleted}/>
                </TouchableOpacity>

            )})
          }


        </View>
      </ScrollView>
    )

}
export default TasksList;
