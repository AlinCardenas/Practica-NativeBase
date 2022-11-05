import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AboutPage } from '../Pages/AboutPage';
import { ContactPage } from '../Pages/ContactPage';

import { TabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
          name='Inicio'
          component={ TabNavigator }
        />
        <Drawer.Screen 
          name='Sobre la App'
          component={ AboutPage }
        />
        <Drawer.Screen 
          name='Contacto'
          component={ ContactPage }
        />
    </Drawer.Navigator>
  )
}