import React, { Component } from 'react';

import { View, Text, TextInput, Button, TouchableHighlight, FlatList} from 'react-native';

import {styles} from '../../styles/homeScreenStyles.js';

import {firebase} from '../../firebase/config'
import 'firebase/firestore';


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goalPlaceholder: 'Filler',
      refreshing: false
    };
  }

  //when first opnening app, getting task data from firestore via get
  async componentDidMount() {
    let tempTasks = ["Task1", "Task2", "Task3"];
    this.setState({tasks: tempTasks});

    //need for onRefresh prop
    this.setState({refreshing:true})
    let taskList=[];
    //const users = await firestore().collection('Users').get();
      const docs = await
      firebase.firestore()
      .collection('Tasks')
      .get()
      .then((doc) => {
         const response = doc.forEach((doc) => {
           taskList.push(doc.data());
        })
        return 1;
      });
    this.setState({tempDoc: taskList, refreshing:false});
    console.log("Doc: ", this.state.tempDoc)
  }

  async onRefresh(){
    this.setState({refreshing:true})
    let taskList=[];
    //const users = await firestore().collection('Users').get();
      const docs = await
      firebase.firestore()
      .collection('Tasks')
      .get()
      .then((doc) => {
         const response = doc.forEach((doc) => {
           taskList.push(doc.data());
        })
        return 1;
      });
    this.setState({tempDoc: taskList, refreshing:false});
  }

  //updates the state with the user text input
  _handleTextChange = event => {
    let newGoal = event.nativeEvent.text;
    this.setState({goalPlaceholder: newGoal})
    console.log("New goal to be added: ", newGoal)

  }

  //when button pressed: updates the state data to the cloud via set
  _saveToFirebase() {
    const dbh = firebase.firestore();
    dbh.collection("Tasks")
    .doc("tempDoc")
    .set({
      description: this.state.goalPlaceholder,
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
        <FlatList
              data={this.state.tempDoc}
              renderItem={({item}) =>
                <View style={{flexDirection: 'column', padding: 10, alignItems: 'stretch'}}>
                  <TouchableHighlight>
                    <View>
                      <Text>description:{item.description}</Text>
                      <Text>discipline: {item.discipline}</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              }
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.refreshing}
          />

      </View>
    )
  }
}

export default HomeScreen;
