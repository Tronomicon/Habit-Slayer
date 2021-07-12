import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Home from '../screens/Home.js'
import Todo from '../screens/Todo.js'
import CharacterPreview from '../screens/CharacterPreview.js'

function MainStackNavigator() {
  return (
    <NavigationContainer>

        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
            gestureEnabled: true,
            headerStyle: {
            backgroundColor: '#101010'
        },
            headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerTintColor: '#ffd700',
        headerBackTitleVisible: false
        }}>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Habit Slayer' }}
        />

        <Stack.Screen
          name='Todo'
          component={Todo}
          options = {({ route }) => ({
            title: route.params.item.name
          })}
        />

        <Stack.Screen
        name='CharacterPreview'
        component={CharacterPreview}
        options={{title: 'Habit Slayer'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator