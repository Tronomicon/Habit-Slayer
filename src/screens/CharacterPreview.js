import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground,Image, Alert } from 'react-native'
import { startClock } from 'react-native-reanimated'
import Slideshow from 'react-native-image-slider-show';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { Award, EmojiHappy, More } from 'iconsax-react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { MenuProvider } from 'react-native-popup-menu';


function Settings(props) {
    //console.log(props.achievements)

    const { navigation } = props
    const image = { uri: "https://cdn.discordapp.com/attachments/548321795170631690/911815781275275315/door.jpg"}
    const image2 = { uri: "https://blenderartists.org/uploads/default/original/4X/5/d/b/5db923e0e6dd4c057e281775bdf4c3d1a6676787.png"}
  return (
    <ImageBackground
    source={image}
    style={styles.backgroundImage}>

<View style={styles.container}>

<MenuProvider> 
  <View style={styles.containerOuter}>
  <Text style={styles.textHeader}>Badges</Text>
  
        <View style={styles.containerInner}>
          <View style={styles.iconContainer}>
            <EmojiHappy color="#37d67a" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger style={styles.iconText} text='Beginnings' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Starting your journey to self improvement",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "November 19th 2021",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Date Of Accomplishment' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Habit' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Complete a Gooal 18 times",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Month' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Complete 30 goals in a row",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Life Routine' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Complete 90 goals in a row",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <View style={styles.containerInner}>
        <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Brithday' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Completed 365 goals",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <Award color="#37d67a" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Growth' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Leveled up for the first time",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "November 19th 2021",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Date Of Accomplishment' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Evolving' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Level up 12 times",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Dedication' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Complete a Goal 10 days in a row",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <View style={styles.containerInner}>
          
        <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Perservere' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Complete a goal 100 days in a row",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Checkup' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Check into the app 30 days in a row",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Great Day' />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Complete at all your goals in a single day(at least 5)",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>

          <View style={styles.iconContainer}>
            <More color="#808080" variant="Broken" size={54} />
            <Menu>
              <MenuTrigger text='Champion'  />
              <MenuOptions>
                <MenuOption onSelect={() => Alert.alert(
                  "",
                  "Reach Level 100",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                )} text='Info' />
              </MenuOptions>
            </Menu>
          </View>
        </View>
  </View>
  </MenuProvider> 

    <View style={styles.container2}>

  <Text style={styles.textHeader2}>Current Level: 2</Text>
    <View style={styles.container3}>

      <Progress.Bar progress={0.3} width={400} height={50} />
    </View>



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
    margin: 20,
    paddingBottom: 40,
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
    height:250,
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
    containerOuter: {
      height:360,
      width: 400,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 280,
     
    },
    containerInner: {
      backgroundColor: '#D8D8D8',
      borderColor: 'black',
      borderWidth: 4,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    iconContainer: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 8,
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    textHeader1: {
      color: 'white',
      fontSize: 55,
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: { width: 5, height: 5 },
      textShadowRadius: 1,
      paddingBottom: 24,
    },
    iconText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
      textShadowColor:'black',
      textShadowOffset:{width: 2, height: 2},
      textShadowRadius:1,
      
    },
})
