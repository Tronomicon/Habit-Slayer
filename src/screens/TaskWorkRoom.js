import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import DifficultyDisplay from '../components/DifficultyDisplay.js'
import {styles} from '../styles/taskWorkRoomStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import {toggleIsCompleted, updateTaskExp, updateAchievements} from '../redux/actions'

//props containing the task content is passed from TaskList.js in .navigate() when a task is selected
//the functions are action creators from mapDispatchToProps below; having props along with action creators require the AC to be called with props.
const TaskWorkRoom = (props, {toggleIsCompleted, updateTaskExp, updateAchievements}) => {
  //console.log(props)

  const navigation = useNavigation();

  const [currentExp, setCurrentExp] = useState(props.route.params.task.task_experience)

  const handleDifficultyChange = (task, newExp) => {

    props.updateTaskExp(task, newExp);
    setCurrentExp(newExp)
  }
  const handleTaskCompletion = (task, achievements) => {

    //obtaining the date that the task is completed then formating it to just the day then adding it to a new array containing the previous dates
    const day_th = moment(new Date()).format('MMM Do')
    //19th --> 19 or 8th --> 8
    //const dayOfCompletion = day_th.length == 4 ? day_th.substring(0, 2) : day_th.substring(0, 1)
    const newDatesArray = [...achievements[0].datesOfCompletedTasks, day_th]

    //achievements is passed as an array of documents, only one document atm thus achievements[0]
    props.updateAchievements(task, achievements[0], newDatesArray);
    props.toggleIsCompleted(task);
    navigation.navigate('TaskHub');

  }


  return (
    <ImageBackground source={require('../images/Adventure_Wallpaper.jpg')} style={styles.container}>
       <View style = {styles.header}>
          <Text style = {styles.taskHeaderText}> {props.route.params.task.task_text}</Text>
          <DifficultyDisplay currentDifficulty={currentExp}/>
       </View>
       <View style = {styles.difficultyWrapper}>
          <View style = {styles.diffTextWrapper}>
            <Text style = {styles.text}>DIFFICULTY</Text>
          </View>
          <TouchableOpacity
              style={styles.difficultyButton}
              onPress={() => handleDifficultyChange(props.route.params.task, 2)}>
                <Icon name="star" size={30} color="#F2BB05" />
                <Text>EASY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.difficultyButton}
            onPress={() => handleDifficultyChange(props.route.params.task, 5)}>
                <View style = {{flexDirection: 'row'}}>
                    <Icon name="star" size={30} color="#F2BB05" />
                    <Icon name="star" size={30} color="#F2BB05" />
                </View>
                <Text>MEDIUM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.difficultyButton}
            onPress={() => handleDifficultyChange(props.route.params.task, 10)}>
              <View style = {{flexDirection: 'row'}}>
                  <Icon name="star" size={30} color="#F2BB05" />
                  <Icon name="star" size={30} color="#F2BB05" />
                  <Icon name="star" size={30} color="#F2BB05" />
              </View>
              <Text>HARD</Text>
          </TouchableOpacity>
       </View>
       <View style = {{ justifyContent: 'center', alignItems: 'center', flex: 0.1}}>
           <TouchableOpacity style={styles.completedButton} onPress={() => handleTaskCompletion(props.route.params.task, props.achievements)}>
              <Text style = {{color: 'white'}}>Toggle Completion</Text>
           </TouchableOpacity>
       </View>
     </ImageBackground>
  )
}
const mapStateToProps = (state) => {
    //console.log(state)
    return {
      achievements: state.firestore.ordered.Achievements
    };
}

const mapDispatchToProps = dispatch => ({
    toggleIsCompleted: (id) => dispatch(toggleIsCompleted(id)),
    updateTaskExp: (task, newExp) => dispatch(updateTaskExp(task, newExp)),
    updateAchievements: (task, achievements, newDatesArray) => dispatch(updateAchievements(task, achievements, newDatesArray))
})

//export default connect(null, mapDispatchToProps)(TaskWorkRoom);

export default compose(
  firestoreConnect(() => [ { collection: 'Achievements' } ]), // sync Tasks collection from Firestore into redux
  connect(mapStateToProps, mapDispatchToProps)
)(TaskWorkRoom)
