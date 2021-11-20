import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground,Image } from 'react-native'
import { startClock } from 'react-native-reanimated'
import Slideshow from 'react-native-image-slider-show';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

function Settings(props) {
    //console.log(props.achievements)

    const { navigation } = props
    const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsGnAkydlqwyokr3hA6IXmezsCHyEuFtTx4lXmFVRgJNlUhAP6SqWnyJ7DcR9xJfp_us&usqp=CAU"}
    const image2 = { uri: "https://blenderartists.org/uploads/default/original/4X/5/d/b/5db923e0e6dd4c057e281775bdf4c3d1a6676787.png"}
  return (
    <ImageBackground
    source={image}
    style={styles.backgroundImage}>



    <View style={styles.container}>
    <Slideshow
      dataSource={[
        { url:'https://cdn.discordapp.com/attachments/548321795170631690/905208233008971847/IMG_0056.PNG' },
        ]}/>
      <Slideshow
      dataSource={[
        { url:'https://cdn.discordapp.com/attachments/548321795170631690/905208231108952114/IMG_0051.PNG' },
          ]}/>
      <Slideshow
      dataSource={[
        { url:'https://cdn.discordapp.com/attachments/548321795170631690/905208229041168414/IMG_0065.PNG' },
       ]}/>
    </View>

    <View style={styles.container2}>

  <Text style={styles.textHeader2}>Currnet Level: 7</Text>
    <View style={styles.container3}>

      <Progress.Bar progress={0.3} width={400} height={50} />
    </View>



     </View>

    </ImageBackground>
  )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
      achievements: state.firestore.ordered.Achievements
    };
}

export default compose(
  firestoreConnect(() => [ { collection: 'Achievements' } ]), // sync Tasks collection from Firestore into redux
  connect(mapStateToProps, null)
)(Settings)

const styles = StyleSheet.create({
  container: {
    flex:1,

    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,

  },
  textHeader: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:1,
  },
  textHeader2: {
    color: 'white',
    fontSize: 35,
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
    height:150,
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,

    flexDirection: 'column'
  },
  container3: {
    height:150,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,

    flexDirection: 'row'
  },
  containerCharacter: {
    height:360,
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,
    flexDirection: 'row'
  },
  image:{
    width:500,
    height:500
    },
})
