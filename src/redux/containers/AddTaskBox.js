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
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTaskBox extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        //redux store
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
        return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.writeTaskWrapper}
              >
              <TextInput
                style={styles.taskTextInput}
                placeholder={'Write a task'}
                onChangeText={(text) =>  this.setState({ text })}
                />
              <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                <View style={styles.addTaskWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}
export default connect()(AddTaskBox);
