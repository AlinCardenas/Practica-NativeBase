//
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen';
import { ViewScreen } from '../screens/ViewScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={ ({ route }) => ({
      // #7 Se genera la pripiedad tabBarIcon con una arrowFunction
      tabBarIcon: ({ focused, color, size }) => {
        // #8 Se crea variable que alamcena el nombre del Icono en cuestion
        let nameIcon='';
        // #9 Generamos un switch que, en base al nombre rescatado de la screen, establece un nombre de icono u otro
        switch(route.name){
          case 'Inicio':
            nameIcon= focused ? 'home' : 'home-outline';
          break;
          case 'Vista':
            nameIcon= focused ? 'star' : 'star-half-outline';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    >
      <Tab.Screen 
        name='home'
        component={ HomeScreen }
        options={{ headerShown: false }}
        />
      <Tab.Screen 
        name='Vista'
        component={ ViewScreen }
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}