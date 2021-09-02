import React, { Component } from 'react';

import { View, Text, TextInput, Button, TouchableHighlight, Flatlist} from 'react-native';

import {styles} from '../../styles/homeScreenStyles.js';

import {firebase} from '../../firebase/config'
import 'firebase/firestore';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goalPlaceholder: 'Filler',
    };
  }

  async componentDidMount() {
    let tempTasks = ["Task1", "Task2", "Task3"];
    this.setState({tasks: tempTasks});
  }
  //updates the state with the user text input
  _handleTextChange = event => {
    let newGoal = event.nativeEvent.text;
    this.setState({goalPlaceholder: newGoal})
    console.log("New goal to be added: ", newGoal)


    // let goalsList = [];
    // goalsList.push(goal);
    // console.log("New goal in list: ", goalsList[0])

    //this.setState({goalsHistory: goalsList});
    //console.log("New goal in global list: ", goalsHistory[0])

  }

  //when button pressed: updates the state data to the cloud via set
  _saveToFirebase() {
    const dbh = firebase.firestore();
    dbh.collection("Tasks")
    .doc("tempDoc")
    .set({
      desciption: this.state.goalPlaceholder,
      discipline: "School"
    });

    console.log("Saved to firebase!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Welcome to Habit Slayer
        </Text>
        <TextInput
          style={styles.flashcard}
          placeholder='Enter your goal'
          onSubmitEditing={event => this._handleTextChange(event)}
        />
        <Button
          title="Update new goal"
          onPress={event => this._saveToFirebase(event)}
        />
        <Text style={styles.headerText}>
          {this.state.tasks}
        </Text>

      </View>
    )
  }
}

export default HomeScreen;
