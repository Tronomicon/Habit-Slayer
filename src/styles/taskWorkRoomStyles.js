import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
  },
  header: {
      backgroundColor: "darkred",
      justifyContent: 'center',
      alignItems: 'center',
  },
  difficultyWrapper: {
      backgroundColor: "white",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      position: 'relative'

  },
  difficultyButton: {
      backgroundColor: "white",
      flexDirection: "column",
      padding: 25,
      alignItems: 'center',
      height: 100
  },
  completedButton: {
      backgroundColor: "darkred",
      width: 100,
      height: 50,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',

  }
})

export {styles}
