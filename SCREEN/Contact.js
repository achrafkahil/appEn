import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, ImageBackground, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View}
    from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";

export default function Contact() {


    return (
        <SafeAreaView  >


                <View>
                    <Text>
                        Contact
                    </Text>
                </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
