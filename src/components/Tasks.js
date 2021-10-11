import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/taskStyles.js';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

export default Task;
