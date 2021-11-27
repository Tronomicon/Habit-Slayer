import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/taskStyles.js';
import moment from "moment";
import Checkmark from './Checkmark.js'
import Icon from 'react-native-vector-icons/FontAwesome';


const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Icon name='book' color='darkblue' size={25}/>
        <Text style={{marginLeft:30}}>{props.text}</Text>
      </View>
      <Text >{moment(props.date.toDate()).calendar()}</Text>
      <Checkmark isCompleted={props.isCompleted}/>
    </View>
  )
}

export default Task;
