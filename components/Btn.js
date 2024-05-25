import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View}
    from 'react-native';

export default function Btn(props) {

    //info , warning , danger
    let cls = props.cls ?? "info";

    let color = "#000",
        bgColor = "cyan";

    if(cls === "warning"){
        color = "#fff";
        bgColor = "orange";
    }
    else if(cls === "danger"){
        color = "#fff";
        bgColor = "#f00";
    }

    const onPress = () =>{
        alert('Clicked ...')
    }

    return (
        <View style={[{ backgroundColor:bgColor, width:"90%", marginHorizontal : 20, marginTop: 15 }]}>
            <Button title={props.title} color={color} onPress={onPress} />
        </View>
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

    },
    vwInput : {
        borderWidth : 1,
        margin: 15,
        position:"relative"
    },
    input2 : {
        height:30,
        padding: 5,
        width:"100%",
        borderRadius: 20
    },
    label:{
        position:'absolute',
        top:-10,
        left:15,
        backgroundColor:"#fff",
        paddingHorizontal:10
    }
});
