import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';

function Detail(props) {

    const {route, navigation} = props
    const {item} = route.params
    const {name, home, species } = item

    return (
    
    <View style={styles.container}>

        <Text style={styles.text}>Todo List</Text>
        <View style={styles.card}>
        
        <Text style={styles.cardText}>This is item 1 </Text>
        <Text style={styles.cardText}>This is item 2 </Text>
        <Text style={styles.cardText}>This is item 3</Text>
        
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}> Go to settings</Text>
        </TouchableOpacity>
        </View>


    </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {
        width: 350,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#101010',
        margin: 10,
        padding: 10, 
        alignItems: 'center'
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
    }
})  

export default Detail