import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TextInput, View}
    from 'react-native';

export default function Input(props) {

    let lbl = props.label,
        multuline = props?.multuline ?? false,
        type = props.type ?? "theme1";

    let vwStyle = {};
    let inputStyle = styles.input;
    let labelStyle = {};

    if(type === "theme2"){
        vwStyle = styles.vwInput;
        inputStyle  = styles.input2;
        labelStyle = styles.label;
    }

    return (
        <View style={[vwStyle, { padding :10 }]}>
            <Text style={labelStyle}> { lbl } </Text>
            <TextInput
                style={[inputStyle, multuline && { height: 80 }]}
                value={props.value}
                onChangeText={props.onChangeTxt}
                placeholder={props.placeH}
                secureTextEntry={props.password}
                multiline={multuline}
            />
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
