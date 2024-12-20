import { createStackNavigator } from '@react-navigation/stack';
import Basics from "../SCREEN/Basics";
import HooksExemple from "../SCREEN/HooksExemple";
import ExempleComponents from "../SCREEN/ExempleComponents";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TouchableOpacity, View, Text, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function StackNav (){

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const navigation =useNavigation();

    const logo =  'https://reactnative.dev/img/tiny_logo.png';

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
                <Tab.Screen name="HooksExemple" component={HooksExemple} options={{ headerShown : false, tabBarLabel : "HOOKS  " }}  />
                <Tab.Screen name="Basic" component={Basics}
                            options={{
                                headerShown : false,
                                tabBarLabel : "",
                                tabBarIcon: ({ focused, color, size }) =>{
                                    return(
                                        <TouchableOpacity onPress={ () =>{ navigation.navigate("Tabs",{ screen : "Basic" }) } }
                                            style={{ marginLeft: 20 , paddingLeft:10 }}
                                        >
                                            <Image source={{ uri : logo }} style={{ width:20, height:20 }}  />
                                            <Text style={{ color: color }} >Basic Test</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            }}
                />


            </Tab.Navigator>
        )
    }

    return(
        <Stack.Navigator initialRouteName={"Tabs"} >
            <Stack.Screen name="Exemple2" component={ExempleComponents} />
            <Stack.Screen name="Basic" component={Basics} />
            <Stack.Screen name="HooksExemple" component={HooksExemple}  />
            <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown : false }} />
        </Stack.Navigator>
    )

}
