import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import RNMonthly from "react-native-monthly";

export default function App() {

  const image = { uri: "https://cdn0.iconfinder.com/data/icons/light-theme/100/ultimate_collection_light_dumbbell-512.png"}
  const background = {uri:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm283-nunny-228-f.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=07450487a021e4ed1452f938be8cad33'}

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <Text style={styles.text1}>November 2021</Text>

      <View style={styles.container2}>

      <View style={styles.container3}>
      <Image
          source={image}
          style={styles.image}
          />
        
      </View>

    <View style={styles.container35}>
    <Text style={styles.text}>Goal: Workout for 1 hour</Text>
      <Text style={styles.text}>Target Goal: 25</Text>
      <Text style={styles.text}>Days Achieved: 21 </Text>
    </View>
      </View>

      
      
      <RNMonthly
     numberOfDays={30}
     activeBackgroundColor="darkblue"
     inactiveBackgroundColor="lightskyblue"
     activeDays={[1, 3, 5, 6, 7, 8, 10, 11, 12 ,13, 14, 15, 16, 17, 18 , 20, 21, 22 ,23 ,24 ,25 ]}
    />
 
      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

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
