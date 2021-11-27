import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';

function Home(props) {

    const {navigation} = props
    const image = { uri: "https://cdn.discordapp.com/attachments/548321795170631690/902201090748080208/background1.png"}

    const character = {
        name: 'Welcome User',
        home: 'Tatooine',
        species: 'human'
    }

    return (
      <ImageBackground
        source={image}
        style={styles.backgroundImage}>
          <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps='handled'
          >
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Image source={require('../images/sword_icon.png')} style={{width:45, height:45}}/>
                        <Text style={styles.headerText}>Habit Slayer</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('TaskHub', { item: character})}>
                       <View style={styles.containerSmaller}>
                          <Text style={styles.text}> Task Hub</Text>
                       </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer2}
                        onPress={() => navigation.navigate('CharacterPreview')}>
                    <Text style={styles.text}>Experience</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer2}
                        onPress={() => navigation.navigate('RoadMap')}>
                    <Text style={styles.text}>Monthly Tracker</Text>
                    </TouchableOpacity>
                </View>
          </ScrollView>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    headerContainer: {
      flexDirection: 'row',
      padding: 20
    },
    containerSmaller: {
        height: 50,
        width:320,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:1,
    },
    headerText: {
      color: 'white',
      fontSize: 38,
      fontWeight: 'bold',
      textShadowColor:'black',
      textShadowOffset:{width: 3, height: 3},
      textShadowRadius:1,
    },
    quoteText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:1,
    },
    buttonContainer: {
        height: 75,
        width:350,
        backgroundColor: 'transparent',
        padding: 10,
        margin: 10,
        borderColor: '#255C99',
        borderWidth: 5,
        borderRadius: 20,
    },
    buttonContainer2: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 75,
        width:350,
        backgroundColor: 'transparent',
        padding: 10,
        margin: 20,
        borderColor: '#255C99',
        borderWidth: 5,
        borderRadius: 20,
    },
    buttonContainer3: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 100,
        width:350,
        backgroundColor: 'transparent',
        padding: 10,
        margin: 20,
        borderColor: '#255C99',
        borderWidth: 5,
        borderRadius: 20,

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 40,
        height: 60,
        width: 350,
        fontStyle: 'italic'
    },
    taskText: {
        textAlign: 'left',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        padding: 30,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:.5,

    },
    textContainer: {
        justifyContent: 'space-between',
        width:370
    }
})

export default Home
