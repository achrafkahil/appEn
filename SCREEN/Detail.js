import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, ImageBackground, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View}
    from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";

export default function Detail() {

    const arr = [1,2,3,4];
    const arrColor = ["#F00", "#0F0", "#00F","cyan"]

    return (
        <SafeAreaView style={{ backgroundColor:"#000" , flex: 1, flexDirection:"row", justifyContent:"space-between",
                                   alignItems:"flex-start" }} >

            {
                arr.map((item, idx) => {
                    return(
                        <View key={idx} style={{ backgroundColor:arrColor[idx] }}>
                            <Text style={{ color:"#000", fontSize:12, padding:2 }}>
                                DETAILS TEST
                            </Text>
                        </View>
                    )
                })
            }

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
