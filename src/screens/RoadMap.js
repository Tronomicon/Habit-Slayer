import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import RNMonthly from "react-native-monthly";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

const App = ( props ) => {
  //const level = parseInt(props.achievements)
  //console.log(level)
  const monthNames = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  //console.log(props.achievements.id)
  const image = { uri: "https://cdn0.iconfinder.com/data/icons/light-theme/100/ultimate_collection_light_dumbbell-512.png"}
  const background = {uri:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm283-nunny-228-f.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=07450487a021e4ed1452f938be8cad33'}
  var month = new Date().getMonth()
  const getProgressExp = (data) => {
    const total_exp = data[0].total_exp
    const level = parseInt(total_exp)
    const result = (Math.floor(level%10)/ 10)
    return (
      result
    )
  }

const getDates = (data) => {
  const totalDays = data[0].datesOfCompletedTasks
  const results = []
  //console.log(totalDays)
  //Go through total days
  for(let i = 1; i < (totalDays.length); i++){
    const contains = 0
    for(let j = 0 ; j < results.length; j++){

      if(monthNames[month] === totalDays[i].substring(0,3)){
        console.log("match")
      
      //Check that the value doesn't exist already 
      if(results[j] == totalDays[i].substring(4,6)){
        console.log("adding a new")
        console.log(totalDays[i].substring(4,6))
        contains = 1
      }
    }
    
  }
  if((contains == 0) && (monthNames[month] === totalDays[i].substring(0,3)) ){
    results.push(parseInt(totalDays[i].substring(4,6)))
  }
}
  //console.log(results)
  return(results)
}

  return (
    
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <Text style={styles.text1}>{monthNames[month]} 2021 Report </Text>
      <View style={styles.container2}>
      <View style={styles.container3}>
      <Image
          source={image}
          style={styles.image}
          />
      </View>
    <View style={styles.container35}>
    <Text style={styles.text}>Days Completing a task  {"\n"}{(props.achievements == undefined) ? console.log("Achievements still loading") : (getDates(props.achievements).length -1)} </Text>
      <Text style={styles.text}>Days Target Goal {"\n"} 25</Text>
      <Text style={styles.text}>Overall Tasks Completed  {"\n"}{(props.achievements == undefined) ? console.log("Achievements still loading") : props.achievements[0].total_exp}  </Text>
      
    </View>
      </View>
      <RNMonthly
     numberOfDays={30}
     activeBackgroundColor="darkblue"
     inactiveBackgroundColor="lightskyblue"
     activeDays={(props.achievements == undefined) ? console.log("Achievements still loading") : getDates(props.achievements)} 
    />
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = (state) => {
 // console.log(state.firestore)
  return {
    
    level1: state.firestore,
    level2: state.firestore.ordered,
    achievements: state.firestore.ordered.Achievements
  };
}

export default compose(
  firestoreConnect(() => [ { collection: 'Achievements' } ]), // sync Tasks collection from Firestore into redux
  connect(mapStateToProps, null)
)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  container2: {
    height:300,
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,
    flexDirection: 'row',

  },
  container3: {
    height:200,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin:10,

    flexDirection: 'row'
  },
  container35: {
    height:275,
    width: 200,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    margin:10,
    flexDirection: 'column'
  },
  container4: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:1,
    padding: 15

},
  text1: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius:1,
    paddingTop: 50,
    paddingBottom: 50,
    alignContent: 'center'
},
monthText: {
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  textShadowColor:'black',
  textShadowOffset:{width: 3, height: 3},
  textShadowRadius:1,
},
image:{
width:200,
height:200
},
background: {
  flex: 1,
  justifyContent: 'center'
}
});
