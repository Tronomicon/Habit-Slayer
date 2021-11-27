import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

const DifficultyDisplay = ({currentDifficulty}) => {
  switch(currentDifficulty) {
    case 2:
      //console.log("CurrentDiff: 2")
      return (
        <View style = {{flexDirection: 'row'}}>
            <Icon name="star" size={35} color="yellow" />
        </View>
      )
    case 5:
      //console.log("CurrentDiff: 5")
      return (
        <View style = {{flexDirection: 'row'}}>
            <Icon name="star" size={35} color="yellow" />
            <Icon name="star" size={35} color="yellow" />
        </View>
      )
    case 10:
      //console.log("CurrentDiff: 10")
      return (
        <View style = {{flexDirection: 'row'}}>
            <Icon name="star" size={35} color="yellow" />
            <Icon name="star" size={35} color="yellow" />
            <Icon name="star" size={35} color="yellow" />
        </View>
      )
  }

}

export default DifficultyDisplay;
