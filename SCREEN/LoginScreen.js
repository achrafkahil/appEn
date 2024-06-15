import React, { useState, useEffect } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View}
    from 'react-native';
import Btn from "../components/Btn";
import {useNavigation} from "@react-navigation/native";
import Input from "../components/Input";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {

    const navigation = useNavigation();
    const logo = 'https://reactnative.dev/img/tiny_logo.png';

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    useEffect(() => {

        storeData("TEST STORAGE");

        let _obj = { id : 1, name : "TEST", email : "test@gmail.com"};
        storeDataObj(_obj);

    }, []);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('myKey', value);
            console.log('GOOD')
        } catch (e) {
            // saving error
            console.log('AN ERROR');
        }
    };

    const storeDataObj = async (obj = {}) => {
        try {
            const jsonValue = JSON.stringify(obj);
            await AsyncStorage.setItem('myKeyObj', jsonValue);
            console.log('GOOD OBJ')
        } catch (e) {
            // saving error
            console.log('ERROR OBJ')
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: "white" ,flexDirection:"column", flex: 1 , justifyContent:"space-between"}} >

            <View style={{ marginTop:40, alignItems:"center", flex:.2, width:'100%' }}>
                <Image source={{ uri : logo }} style={{ width:50, height:50 }} />
                <Text style={{ textAlign : "center", marginTop: 20 }}>LOGIN</Text>
            </View>

            <View style={{ width:"100%" }}>

                <Input
                    label={"Email"}
                    value={email}
                    placeH={"Fill input "}
                    onChangeTxt={(text) => setEmail(text) }
                    password={false}
                    type={"theme2"}
                />
                <Input
                    label={"Password"}
                    value={password}
                    placeH={"Fill input "}
                    onChangeTxt={(text) => setPassword(text) }
                    password={true}
                    type={"theme2"}
                />

                <Btn title={"Login"} cls={"danger"} onPress={() =>{ navigation.navigate('Home', { email }) }}   />
                <Btn title={"Create an account"} onPress={() =>{  }} />
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
