import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

function Detail(props) {
   
    const image = { uri: "https://wallpaperaccess.com/full/1719691.jpg"}
    const {navigation} = props

    return (
    
    <ImageBackground
    source={image}
    style={styles.backgroundImage}
    >

    <View style={styles.container}>

        <Text style={styles.text}>Todo List</Text>

        <View style={styles.card}>
        <Text style={styles.text}>Map</Text>
        <Image
            source={{ uri: 'https://i.pinimg.com/originals/d4/17/47/d417475a28c4700d33ba6ef5f18cd3ed.png' }}
            style={{ width: 370, height: 450 }}
        />
        </View>

        

        <TouchableOpacity
            style={styles.card2}
            onPress={() => navigation.navigate('CompletedTasks')}>
        <Text style={styles.text}> CompletedTasks</Text>
        </TouchableOpacity>
        
       

    </View>    
  </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin:10,
        borderRadius: 20,
        borderColor: 'cyan',
        borderWidth: 5,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:1,
    },
    text2: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:1,
    },
    card: {
        width: 385,
        height: 550,
        backgroundColor: 'transparent',
        padding: 10, 
        alignItems: 'center',
        margin:10,
        borderRadius: 2,
        borderColor: 'cyan',
        borderWidth: 5,
        justifyContent: 'space-around',
        
    },
    card2: {
        width: 375,
        height: 175,
        backgroundColor: 'transparent',
        padding: 10, 
        alignItems: 'center',
        margin:10,
        borderRadius: 20,
        borderColor: 'cyan',
        borderWidth: 5,
        justifyContent: 'space-around',
    },
    cardText: {
        fontSize: 18,
        color: '#ffd700',
        marginBottom: 5
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
      buttonContainer2: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 75,
        width:350,
        backgroundColor: 'transparent',
        padding: 10,
        margin: 20,
        borderColor: 'cyan',
        borderWidth: 5,
        borderRadius: 20,
    },
})  

export default Detail