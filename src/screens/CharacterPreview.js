import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground,Image } from 'react-native'
import { startClock } from 'react-native-reanimated'
import Slideshow from 'react-native-image-slider-show';

function Settings(props) {

    const { navigation } = props
    const image = { uri: "https://i.pinimg.com/originals/3a/d1/71/3ad17165cde9bd1b7eae8c7480b93dca.gif"}

  return (
    <ImageBackground 
    source={image}
    style={styles.backgroundImage}>

      <Text style={styles.textHeader}>Character Name</Text>

    <View style={styles.container}>

      <View style={styles.containerCharacter}>

    

       </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        
      </TouchableOpacity>
    </View>

    <View style={styles.container2}>
   

    <View style={styles.container3}>
      <Text style={styles.text}>DISCIPLINE</Text>
    </View>

    <View style={styles.container3}>
      <Text style={styles.text}>EXP tracker</Text>
    </View>

     </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    height:500,
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,
    borderRadius: 20,
    borderColor: 'cyan',
    borderWidth: 5,
    padding: 50,
  },
  textHeader: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:1,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:1,
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  backgroundImage: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container2: {
    height:250,
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,
    borderRadius: 20,
    borderColor: 'cyan',
    borderWidth: 5,
    flexDirection: 'row'
  },
  container3: {
    height:150,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,
    borderRadius: 20,
    borderColor: 'cyan',
    borderWidth: 5,
    flexDirection: 'row'
  },
  containerCharacter: {
    height:360,
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,
    borderRadius: 20,
    borderColor: 'cyan',
    borderWidth: 5,
    flexDirection: 'row'
  },
})

export default Settings