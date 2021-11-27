import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
  },
  header: {
      backgroundColor: "#124E78",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      flex: 0.10
  },
  difficultyWrapper: {
      flex: 0.40,
      flexDirection: 'column',
      justifyContent: 'space-evenly',

  },
  difficultyButton: {
      backgroundColor: "white",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderWidth: 3
  },
  completedButton: {
      backgroundColor:'green',
      width: 100,
      height: 50,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
  },
  diffTextWrapper: {
    backgroundColor: "#255C99",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 3,
    marginBottom: 3
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskHeaderText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  }
})

export {styles}
