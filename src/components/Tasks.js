import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/taskStyles.js';
import moment from "moment";
import Checkmark from './Checkmark.js'

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text >{props.text}</Text>
      </View>
      <Text >{moment(props.date.toDate()).calendar()}</Text>
      <Checkmark isCompleted={props.isCompleted}/>
    </View>
  )
}

export default Task;
