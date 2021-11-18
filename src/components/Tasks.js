import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/taskStyles.js';
import moment from "moment";

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text >{props.text}</Text>
      </View>
      <Text >{moment(props.date.toDate()).calendar()}</Text>
      <View style={styles.circular}></View>
    </View>
  )
}

export default Task;
