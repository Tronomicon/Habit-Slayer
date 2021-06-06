import React, { Component } from 'react';

import { View, Text} from 'react-native';

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
      </View>
    )
  }
}

export default HomeScreen;
