import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  headerWrapper: {
    flex: .15,
    marginTop:40
  },
  tasksWrapper: {
    flex: 1
  },
  writeTaskWrapper: {

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  taskTextInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addTaskWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center'
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  taskText: {
    fontSize: 15,
  },
  flashcard: {
    height: 40,
    margin: 12,
    borderWidth: 5,
    borderColor: 'green',
  },
  task: {
    backgroundColor: "#fff"
  }
})

export {styles}
