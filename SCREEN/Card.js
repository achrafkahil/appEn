import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View}
    from 'react-native';

export default function Card() {

    const logo = 'https://reactnative.dev/img/tiny_logo.png';

    return (
        <SafeAreaView style={{ backgroundColor: "cyan" ,flexDirection:"column", justifyContent:"center",
            alignItems:"center", flex: 1 }} >
            <View style={{ backgroundColor:"#fff", flexDirection : "row", justifyContent:"space-between",  alignItems:"center",
                            width:"90%" ,paddingHorizontal:20 , height: 100, borderRadius : 20,
                            borderLeftWidth:10, borderLeftColor : "plum"
            }}>

                <View style={{ flexDirection : "row", alignItems:"center" }}>
                    <Image source={{ uri : logo }} style={{ width:50, height:50 }} />
                    <View style={{ marginHorizontal : 15 }} >
                        <Text> TITLExxx </Text>
                        <Text> Lorem ipsum dolor sit amet. </Text>
                    </View>
                </View>

                <Text style={{ fontSize : 28 }}> > </Text>

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
