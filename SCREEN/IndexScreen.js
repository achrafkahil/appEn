import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View}
    from 'react-native';
import Btn from "../components/Btn";
import {useNavigation} from "@react-navigation/native";

export default function IndexScreen() {

    const navigation = useNavigation();
    const logo = 'https://reactnative.dev/img/tiny_logo.png';

    return (
        <SafeAreaView style={{ backgroundColor: "cyan" ,flexDirection:"column", flex: 1, justifyContent:"space-between"}} >

            <View style={{ marginTop:40, alignItems : "center" }}>
                <Image source={{ uri : logo }} style={{ width:50, height:50 }} />
                <Text style={{ marginTop: 20 }}>Lorem APP </Text>
            </View>

            <View style={{ marginTop:40, alignItems:"center" }}>
                <Text style={{ textAlign : "center", marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, veniam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, veniam!
                </Text>
            </View>

            <View style={{ width:"100%" }}>
                <Btn title={"Login"} cls={"danger"}  onPress={() =>{ navigation.navigate('Login') }}  />
                <Btn title={"Create an account"} cls={"primary"} onPress={() =>{ navigation.navigate('NewAccount') }} />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',

        padding:50
    },
    containerFull: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        width:"100%",
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 22,
        //lineHeight: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    square :{
        width : 150,
        height : 150,
        backgroundColor:"#f00",
        margin:20
    },
    tinyLogo: {
        width: 100,
        height: 100,
        marginVertical: 20
    },
    imageBg : {

    }
});
