import React, { useState, useEffect } from 'react';
import ExempleComponents from "./SCREEN/ExempleComponents";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Basics from "./SCREEN/Basics";
import HooksExemple from "./SCREEN/HooksExemple";
import Detail from "./SCREEN/Detail";
import Contact from "./SCREEN/Contact";

export default function App() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function TabsNavigator() {
      return(
          <Tab.Navigator
            screenOptions={{
                tabBarShowLabel : true,
                tabBarStyle:{
                    //backgroundColor:"#ccc",
                }
            }}
          >
              <Tab.Screen name="Exemple2" component={ExempleComponents} options={{ tabBarLabel:"COMPONENT .." }} />
              <Tab.Screen name="Basic" component={Basics} options={{ headerShown : false, tabBarLabel : "BASIC " }}  />
              <Tab.Screen name="HooksExemple" component={HooksExemple} options={{ headerShown : false, tabBarLabel : "HOOKS  " }}  />

          </Tab.Navigator>
      )
  }

  return (
     <NavigationContainer>
         <Stack.Navigator initialRouteName={"Tabs"} >
             <Stack.Screen name="Exemple2" component={ExempleComponents} />
             <Stack.Screen name="Basic" component={Basics} />
             <Stack.Screen name="HooksExemple" component={HooksExemple}  />
             <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown : false }} />
         </Stack.Navigator>
     </NavigationContainer>
  );
}

