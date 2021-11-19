import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";

import {styles} from '../../styles/taskHubStyles.js';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import {firebase} from '../../firebase/config';
import 'firebase/firestore';

class AddTaskBox extends Component {

    state = {
        task_text: ''
    }

    _handleTextChange(changedText) {
      this.setState({
        task_text: changedText
        })

    }

    //when submit button is pressed: 1.create a unique id and update it to the state 2. calls function to dispatch to store and firebase
    _handleSubmit() {

        //updating task id then uses callback to save to firebase after the update happens
        this.props.addTodo(this.state)

        //to clear the text input text
        this.textInput.clear()

        this.setState({ task_text: '' })

        //WITHOUT THUNK, adding new task with text from the TextInput to the store
        //this class can call this.props.dispatch() b/c of connect() from redux has connected the class to the store
        //dispatching an action
        //this.props.dispatch(addTodo(this.state.task_text, id))
    }

    render() {
        return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.writeTaskWrapper}
              >
              <TextInput
                id='TextInput'
                style={styles.taskTextInput}
                placeholder={'Write a task'}
                ref={input => { this.textInput = input }}
                onChangeText={(changedText) =>  this._handleTextChange(changedText)}
                />
              <TouchableOpacity onPress={() => this._handleSubmit()}>
                <View style={styles.addTaskWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    addTodo: (content) => dispatch(addTodo(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskBox);
