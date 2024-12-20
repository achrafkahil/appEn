import {View, Text, SafeAreaView, TouchableOpacity, Image} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function DrawerNavCustom() {

    const navigation =useNavigation();
    const logo =  'https://reactnative.dev/img/tiny_logo.png';

    const goTo = (nameScreen) =>{
        nameScreen ? navigation.navigate(nameScreen) : alert("Not exist");
    }

    return(
        <SafeAreaView >
            <TouchableOpacity onPress={ () => { goTo("Index") } }  style={{ flexDirection:"row", marginLeft:10 , marginTop: 25}}>
                <Text> APP ENSA - REACT-NATIVE </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => { goTo("Index") } }  style={{ flexDirection:"row", marginLeft:10 , marginTop: 25}}>
                <Image source={{ uri : logo }} style={{ width:20, height:20 }}  />
                <Text> Index </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => { goTo("Basic") } }  style={{ flexDirection:"row", marginLeft:10 , marginTop: 25}}>
                <Image source={{ uri : logo }} style={{ width:20, height:20 }}  />
                <Text> BASIC </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => { goTo("Detail") } }  style={{ flexDirection:"row", marginLeft:10, marginTop: 25 }}>
                <Image source={{ uri : logo }} style={{ width:20, height:20 }}  />
                <Text> Exemple </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => { goTo("Card") } }  style={{ flexDirection:"row", marginLeft:10, marginTop: 25 }}>
                <Image source={{ uri : logo }} style={{ width:20, height:20 }}  />
                <Text> Card </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}
