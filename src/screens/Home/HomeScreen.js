import React, { Component } from 'react';

import { View, Text, TextInput} from 'react-native';

import {styles} from '../../styles/homeScreenStyles.js';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { };
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
        />

      </View>
    )
  }
}

export default HomeScreen;
