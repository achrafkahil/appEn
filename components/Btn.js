import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View}
    from 'react-native';

export default function Btn(props) {

    //info , warning , danger
    //let cls = (props.cls) ? props.cls : "info";
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
    else if(cls === "primary"){
        color = "#fff";
        bgColor = "blue";
    }

    const onPress = () =>{
        alert('Clicked ...')
    }

    return (
        <View style={[{ backgroundColor:bgColor, width:"90%", marginHorizontal : 20, marginTop: 15 }]}>
            <Button
                title={props.title}
                color={color}
                onPress={props.onPress ?? onPress}
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
    },
});
