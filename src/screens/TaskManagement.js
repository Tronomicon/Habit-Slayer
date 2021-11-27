import React, { Component } from 'react';

import { View, Text, TextInput, Button, TouchableHighlight, FlatList, KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView, ImageBackground, Image} from 'react-native';

import {v4 as uuidv4} from 'uuid';
import {styles} from '../styles/taskManagementStyles.js';
import Task from '../components/Tasks.js';

import {firebase} from '../firebase/config';
import 'firebase/firestore';

class TaskManagement extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      task: 'Filler data',
      taskItems: [],
      taskID: 'Filler ID',
      toBeDeleted: 'Filler'
    };
  }

  //when first opening app, getting task data from firestore via get
  async componentDidMount() {
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
    //removing first index b/c firebase requires a default doc which is first
    taskList.splice(0, 1)
    this.setState({taskItems: taskList, refreshing:false});
    console.log("Doc: ", this.state.taskItems)
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

  //when button is pressed, adds the new task to the list of taskItems and saves to firebase
   _handleAddTask() {
    this._saveToFirebase()
    let {taskItems} = this.state
    let {task} = this.state
    taskItems.push({task})
    this.setState({taskItems: taskItems})
    Keyboard.dismiss();
  }

  //when task item is touched: copies taskItems, remove item in copy at that index, updates taskItems
  _handleTaskCompleted(index) {

    let tasksCopy = [...this.state.taskItems]
    console.log("index", tasksCopy[index].id, index)
    this.setState({taskItems: tasksCopy})
    this.setState({toBeDeleted: tasksCopy[index].id})
    this._deleteFromFirebase()
    tasksCopy.splice(index, 1)
    this.setState({taskItems: tasksCopy})

  }

  async _deleteFromFirebase() {
      const docs = await
      console.log("tobeDeletedID", this.state.toBeDeleted)
      firebase.firestore()
      .collection("Tasks")
      .doc(this.state.toBeDeleted).delete()
      .then(() => console.log("delete successful")).catch((error)=> console.log(error))
  }

  //when button pressed: updates the state data to the cloud via set
  _saveToFirebase() {
    const dbh = firebase.firestore();
    dbh.collection("Tasks")
    .doc(this.state.taskID)
    .set({
      task: this.state.task,
      id: this.state.taskID,
    });
    console.log("Saved to firebase!")
  }

  _handleTextChange(taskData) {
    this.setState({task:taskData})
    let id = uuidv4();
    this.setState({taskID:id})
  }

  render() {
    console.log(this.state.taskItems)
    return (
      <ImageBackground source={require('../images/Adventure_Wallpaper.jpg')} style={styles.container}>

        <View style={styles.headerWrapper}>
          <Image source={require('../images/sword_icon.png')} style={{width:30, height:30}}/>
          <Text style={styles.headerText}>
            Habit Slayer
          </Text>
        </View>

        <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
        >
          {/*View Tasks Section*/}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionHeader}>Today's Tasks</Text>
          
            {
              
              this.state.taskItems.map((item, i) => {
                return (
                  <TouchableOpacity key={i}  onPress={() => this._handleTaskCompleted(i)}>
                    <Task key={i.toString()} text={item.task}/>
                    
                  </TouchableOpacity>

              )})
            }
          
          </View>
        </ScrollView>
        {/*Write Tasks Section*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
          >
          <TextInput
            style={styles.taskTextInput}
            placeholder={'Write a task'}
            onChangeText={text => this._handleTextChange(text)}
            />
          <TouchableOpacity onPress={() => this._handleAddTask()}>
            <View style={styles.addTaskWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <FlatList
              data={this.state.tempDoc}
              renderItem={({item}) =>
                <View style={{flexDirection: 'row', padding: 10, alignItems: 'stretch'}}>
                  <TouchableHighlight>
                    <View style={{ backgroundColor: 'beige' }}>
                      <Text>description:{item.task}</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              }
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.refreshing}
          />

      </ImageBackground>
    )
  }
}

export default TaskManagement;
