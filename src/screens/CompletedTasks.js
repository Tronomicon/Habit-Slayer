import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

function Detail() {
   
    const image = { uri: "https://printablewares.com/img/backgrounds/june-2021-calendar-wallpapers-sage-green.jpg"}

    return (
    
    <ImageBackground
    source={image}
    style={styles.backgroundImage}>
    <View style={styles.container}>
        <Text style={styles.text}>Calandar</Text>
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
})  

export default Detail