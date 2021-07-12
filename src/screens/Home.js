import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, ImageBackground } from 'react-native';

function Home(props) {
    
    const {navigation} = props
    const image = { uri: "https://i.pinimg.com/originals/a1/9a/1d/a19a1df22a78826d35961812f1ccfe11.png?q=60"}

    const character = {
        name: 'Luke Skywalker',
        home: 'Tatooine',
        species: 'human'
    }

    return (
        <ImageBackground 
        source={image}
         style={styles.backgroundImage} >
    <View style={styles.container}>
        <Text style={styles.text}>Habit Slayer Home page</Text>
        
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
        fontSize: 35,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:1,
    },
    quoteText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor:'black',
        textShadowOffset:{width: 5, height: 5},
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
        height: 150,
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
        fontSize: 21,
        color: 'red',
        fontWeight: 'bold',
        padding: 30
        
    },
    textContainer: {
        justifyContent: 'space-between',
        width:370
    }
})  

export default Home