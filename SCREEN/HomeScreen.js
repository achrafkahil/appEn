import React, { useState, useEffect } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View}
    from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {

    const navigation = useNavigation();
    const route= useRoute();
    const { params} = route;

    const logo = 'https://reactnative.dev/img/tiny_logo.png';

    const [mail, setMail] = useState("");
    const [nameUser, setNameUser] = useState("");

    const dataCategory = [
        { id:1, name : "Category 1", bgColor : "#F00", txtColor : "#fff" },
        { id:2, name : "Category 2", bgColor : "#0F0", txtColor : "#000" },
        { id:3, name : "Category 3", bgColor : "#00F", txtColor : "#fff" },
        { id:4, name : "Category 4", bgColor : "#000", txtColor : "#fff" }
    ];

    useEffect(() => {

        const { email } = params; //params.email
        setMail(email);

        //getData().then(res => setMail(res) );
        //getDataObj().then(r => setNameUser(r.name));
    }, []);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('myKey');
            if (value !== null) {
                return value;
            }
        } catch (e) {
            // error reading value
        }
    };

    const getDataObj = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('myKeyObj');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    const renderCategories = () =>{
        return(
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ margin: 20, }}>
                {
                    (dataCategory && dataCategory.length>0) && (
                        dataCategory.map((item, idx) => {
                            return(
                                <View key={item.id} style={{ padding:10, borderWidth:1, height:40, marginRight : 10,
                                                            backgroundColor: item.bgColor
                                }}>
                                    <Text style={{ color : item.txtColor }}> {item.name} </Text>
                                </View>
                            )
                        })
                    )
                }
            </ScrollView>
        )
    }

    const renderMessageInfo = () =>{
        return(
            <View style={{ marginHorizontal : 20, marginTop:30 }}>
                <View style={{ backgroundColor:"cyan", padding : 20, borderRadius : 8,
                               borderLeftWidth : 4, borderLeftColor : "blue" }}>
                    <Text style={{ marginBottom : 25, fontSize : 22 }}>TITLE MESSAGE</Text>
                    <Text numberOfLines={4}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium aliquid aspernatur dolor esse est impedit inventore nihil numquam
                        obcaecati perspiciatis praesentium recusandae similique sint sit totam,
                        ullam unde vel voluptate!
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: "white" ,flexDirection:"column", flex: 1 }} >

            <View style={{ height: 200, backgroundColor:"cyan", paddingTop : 60, paddingHorizontal : 20 }}>
               <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                   <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                       <Ionicons name="menu" size={35} />
                   </TouchableOpacity>
                   <Image source={{ uri : logo }} style={{ width:35, height:35 }} />

                   <TouchableOpacity onPress={() =>{ alert('Notification') }}>
                       <Ionicons name="notifications-circle" size={35} />
                   </TouchableOpacity>
               </View>

                <View style={{ marginTop : 30 }}>
                    <Text>Email : { mail } </Text>
                </View>

            </View>

            <View style={{ margin:20,}}>
                <Text>Bonjour , { nameUser } </Text>
            </View>

            <View style={{ }}>
                { renderCategories() }
            </View>

            { renderMessageInfo() }

        </View>
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
