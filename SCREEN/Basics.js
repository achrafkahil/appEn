import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, ImageBackground, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View}
    from 'react-native';
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";

export default function Basics() {
    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
    const logo =  'https://reactnative.dev/img/tiny_logo.png';

    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    const [isPassword, setIsPassword] = useState(false);

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const route= useRoute();
    const { params} = route;

    useEffect(() => {
        setText(params?.username ?? "");
    }, [isFocused]);

    const handleChange = (val) =>{
        setText(val);
    }
    const handleChangePassword = (val) =>{
        setPassword(val);
    }

    const clickBtn = () =>{

    }

    const togglePassword = () =>{
        setIsPassword(prev => !prev);
    }

    return (
        <SafeAreaView  style={styles.containerFull}>

            {/*<ImageBackground source={image} resizeMode={"cover"} style={styles.image}>*/}

                <View style={{ padding:10 }}>
                    <Text> Username </Text>
                    <TextInput
                        value={text}
                        onChangeText={handleChange}
                        placeholder={"fill input"}
                        placeholderTextColor={"#f00"}
                        style={styles.input}
                        //keyboardType={"numeric"}
                    />
                </View>
                <View style={{ padding:10 }}>
                    <Text> Password </Text>
                    <TextInput
                        value={password}
                        onChangeText={handleChangePassword}
                        placeholder={"fill input"}
                        placeholderTextColor={"#00f"}
                        style={styles.input}
                        secureTextEntry={isPassword}
                    />

                    <Button title={ `${ !isPassword ?"Hide": "Show" } password` } onPress={togglePassword} />

                </View>

                <Button title={"Login"} onPress={clickBtn} />

                <View style={{ marginHorizontal: 15 }}>
                    <Text numberOfLines={2}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda facere itaque? Consectetur doloremque laborum nulla? A ab animi deleniti dolorem eius, iusto, libero, officiis porro quibusdam repudiandae totam voluptatibus. </Text>
                </View>

                <ScrollView horizontal >
                    <Image
                        source={{uri : logo}}
                        style={styles.tinyLogo}
                    />

                    <Image
                        source={require("../assets/images/logoEnsa.png")}
                        style={styles.tinyLogo}
                    />
                </ScrollView>

            {/*</ImageBackground>*/}


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
        paddingHorizontal:15,
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
        marginVertical: 20,
        marginLeft: 15
    },
    imageBg : {

    }
});
