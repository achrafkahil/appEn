import React, { useState, useEffect } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View}
    from 'react-native';
import Btn from "../components/Btn";
import {useNavigation} from "@react-navigation/native";
import Input from "../components/Input";

export default function NewAccountScreen() {

    const navigation = useNavigation();
    const logo = 'https://reactnative.dev/img/tiny_logo.png';

    return (
        <SafeAreaView style={{ backgroundColor: "white" ,flexDirection:"column",flex: 1, justifyContent:"space-between" }} >

            <View style={{ marginTop:40, alignItems:"center", flex: .2, width:'100%' }}>
                <Image source={{ uri : logo }} style={{ width:50, height:50 }} />
                <Text style={{ textAlign : "center", marginTop: 20 }}>New Account</Text>
            </View>

            <View style={{ width:'100%', flex:1 }}>

                <ScrollView  showsVerticalScrollIndicator={false}>
                    <Input
                        label={"Username"}
                        value={"username"}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={false}
                    />
                    <Input
                        label={"Email"}
                        value={"email@gmail.com"}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={false}
                    />
                    <Input
                        label={"Fullname"}
                        value={"email@gmail.com"}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={false}
                    />
                    <Input
                        label={"Password"}
                        value={"monPassword"}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={true}
                    />
                    <Input
                        label={"Confirm Password"}
                        value={"monPassword"}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={true}
                    />
                </ScrollView>


            </View>

            <View style={{ width:"100%" }}>
                <Btn title={"Create an account"}  onPress={() =>{  }} />
                <Btn title={"Cancel"} cls={"danger"}  onPress={() =>{ navigation.goBack() }} />
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
