import React, { Component } from 'react';

import { View, Text, TextInput, Button, TouchableHighlight, FlatList, KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView, ImageBackground, Image} from 'react-native';

import {styles} from '../styles/taskHubStyles.js';
import AddTaskBox from '../redux/containers/AddTaskBox.js'
import DisplayTaskBox from '../redux/containers/DisplayTasksBox.js'

class TaskHub extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/Adventure_Wallpaper.jpg')} style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image source={require('../images/sword_icon.png')} style={{width:30, height:30}}/>
                    <Text style={styles.headerText}>Task Hub</Text>
                </View>
                <AddTaskBox/>
                <View style={ {flex: 1}}>
                    <DisplayTaskBox/>
                </View>
            </ImageBackground>

        );
    }
}
export default TaskHub;
