import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, ImageBackground } from 'react-native';

function Home(props) {
    
    const {navigation} = props
    const image = { uri: "https://cdn.discordapp.com/attachments/548321795170631690/902201090748080208/background1.png"}

    const character = {
        name: 'Welcome Luke Skywalker',
        home: 'Tatooine',
        species: 'human'
    }

    return (
        <ImageBackground 
        source={image}
         style={styles.backgroundImage}>

    <View style={styles.container}>
        <Text style={styles.text}>Home page</Text>
        
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Todo', { item: character})}>

         <View style={styles.containerSmaller}>
            <Text style={styles.text}> Todo List</Text>

            <View style={styles.textContainer}>
            <Text style={styles.taskText}>• This is a holder for task 1</Text>
            <Text style={styles.taskText}>• This is a holder for task 2</Text>
            <Text style={styles.taskText}>• This is a holder for task 3</Text>
            </View>
         </View>
            </TouchableOpacity>
           
        <TouchableOpacity
            style={styles.buttonContainer2}
            onPress={() => navigation.navigate('CharacterPreview')}>
        <Text style={styles.text}>Character Preview</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonContainer2}
            onPress={() => navigation.navigate('RoadMap')}>
        <Text style={styles.text}>RoadMap</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer3}>
        <Text style={styles.quoteText}>This is a place holder for quotes</Text>
        </View>
    </View>    
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
    containerSmaller: {
        height: 50,
        width:320,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        fontSize: 40,
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
        height: 400,
        width:350,
        backgroundColor: 'transparent',
        padding: 10,
        margin: 10,
        borderColor: 'cyan',
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
        borderColor: 'cyan',
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
        borderColor: 'cyan',
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