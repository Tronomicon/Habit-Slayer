import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  headerWrapper: {
    flex: 0.15,
    flexDirection: 'row',
    marginHorizontal: 15 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadowColor:'black',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius:1,
  },
  taskHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskTextInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: '#255C99',
    borderWidth: 3,
    width: 250,
  },
  addTaskWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#255C99',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export {styles}
