import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import {styles} from '../styles/taskWorkRoomStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import {toggleIsCompleted} from '../redux/actions'
import {updateTaskExp} from '../redux/actions'

//props containing the task content is passed from TaskList.js in .navigate() when a task is selected
//the functions are action creators from mapDispatchToProps below; having props along with action creators require the AC to be called with props.
const TaskWorkRoom = (props, {toggleIsCompleted, updateTaskExp}) => {
  //console.log(props)

  const navigation = useNavigation();

  const handleDifficultyChange = (task, newExp) => {
    //console.log("props:", props)
    props.updateTaskExp(task, newExp);
  }

  const handleTaskCompletion = (task) => {
    props.toggleIsCompleted(task);
    navigation.navigate('TaskHub');

  }

  return (
    <ImageBackground source={require('../images/Adventure_Wallpaper.jpg')} style={styles.container}>
       <View style = {styles.header}>
          <Text style = {{fontSize: 30}}> {props.route.params.task.task_text}</Text>
       </View>
       <Text>Difficulty Level:</Text>
       <View style = {styles.difficultyWrapper}>
          <TouchableOpacity
              style={styles.difficultyButton}
              onPress={() => handleDifficultyChange(props.route.params.task, 2)}>
                <Icon name="star" size={30} color="#900" />
                <Text>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.difficultyButton}
            onPress={() => handleDifficultyChange(props.route.params.task, 5)}>
                <View style = {{flexDirection: 'row'}}>
                    <Icon name="star" size={30} color="#900" />
                    <Icon name="star" size={30} color="#900" />
                </View>
                <Text>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.difficultyButton}
            onPress={() => handleDifficultyChange(props.route.params.task, 10)}>
              <View style = {{flexDirection: 'row'}}>
                  <Icon name="star" size={30} color="#900" />
                  <Icon name="star" size={30} color="#900" />
                  <Icon name="star" size={30} color="#900" />
              </View>
              <Text>Hard</Text>
          </TouchableOpacity>
       </View>
       <View style = {{ justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity style={styles.completedButton} onPress={() => handleTaskCompletion(props.route.params.task)}>
              <Text style = {{color: 'white'}}>Complete Task</Text>
           </TouchableOpacity>
       </View>
     </ImageBackground>
  )
}
// const mapStateToProps = (state) => {
//     //console.log(state)
//     return {
//       tasks: state
//     };
// }

const mapDispatchToProps = dispatch => ({
    toggleIsCompleted: (id) => dispatch(toggleIsCompleted(id)),
    updateTaskExp: (task, newExp) => dispatch(updateTaskExp(task, newExp))
})

export default connect(null, mapDispatchToProps)(TaskWorkRoom);
