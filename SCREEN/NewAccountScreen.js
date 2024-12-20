import React, { useState, useEffect } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View}
    from 'react-native';
import Btn from "../components/Btn";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import Input from "../components/Input";

import ToggleSwitch from 'toggle-switch-react-native'

export default function NewAccountScreen() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const logo = 'https://reactnative.dev/img/tiny_logo.png';

    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState("")

    useEffect(() => {
        setShowInfo(false);
    }, [isFocused]);

    useEffect(() => {
        console.log("READYYY!!!")
    }, []);

    const objUser = [
        { name : "USERNAME" ,   value : username },
        { name : "ADDRESS" ,    value : address },
        { name : "EMAIL" ,      value : email },
        { name : "FULLNAME" ,   value : fullname },
        { name : "NOTIFICATIONS" ,   value : isChecked ? "SHOW" : "HIDE" },
    ];

    const toggleSwitch = () => setIsChecked(previousState => !previousState);

    const redirectUser = () =>{
        !showInfo ? setShowInfo(true) : navigation.navigate('Home',{ email })
    }

    const renderBodyForm = () =>{
        return(
            <View style={{ width:'100%', flex:1 }}>
                <ScrollView  showsVerticalScrollIndicator={false}>

                    <Input
                        type={"theme2"}
                        label={"Username"}
                        value={username}
                        placeH={"Fill input example ..."}
                        onChangeTxt={(text) => setUsername(text) }
                        password={false}
                    />

                    <Input
                        label={"Address"}
                        value={address}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => setAddress(text) }
                        password={false}
                        multuline
                    />

                    <Input
                        label={"Email"}
                        value={email}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => setEmail(text) }
                        password={false}
                    />

                    <View style={{ flexDirection:"row", marginLeft : 15 }}>
                        <Text>Active notification </Text>

                        <ToggleSwitch
                            isOn={isChecked}
                            onColor="#1A71EB"
                            offColor="#ccc"
                            size="small"
                            onToggle={toggleSwitch}
                            height={40}
                            style={{ marginLeft:20 }}
                        />
                    </View>

                    <Input
                        label={"Fullname"}
                        value={fullname}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => setFullname(text) }
                        password={false}
                    />


                    <Input
                        label={"Password"}
                        value={""}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={true}
                    />
                    <Input
                        label={"Confirm Password"}
                        value={""}
                        placeH={"Fill input "}
                        onChangeTxt={(text) => alert(text) }
                        password={true}
                    />
                </ScrollView>
            </View>
        )
    }

    const renderBodyInfo = () =>{
        return(
            <View style={{ marginHorizontal : 30 }}>
                <Text style={{ fontSize : 22 }} > DETAILS INFO USER </Text>
                <View style={{ marginTop : 25 }}>

                    {
                        objUser && (
                            objUser.map((item, idx) =>{
                                return(
                                    <View key={idx} style={{ flexDirection : "row", justifyContent:"space-between", marginBottom: 15 }}>
                                        <View >
                                            <Text>{ item?.name } </Text>
                                        </View>
                                        <View >
                                            <Text>{ item?.value || "-" } </Text>
                                        </View>
                                    </View>
                                )
                            })
                        )
                    }

                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: "white" ,flexDirection:"column",flex: 1, justifyContent:"space-between" }} >

            <View style={{ marginTop:40, alignItems:"center", flex: .2, width:'100%' }}>
                <Image source={{ uri : logo }} style={{ width:50, height:50 }} />
                <Text style={{ textAlign : "center", marginTop: 20 }}>New Account</Text>
            </View>

            { !showInfo ?  renderBodyForm()  : renderBodyInfo()  }

            <View style={{ width:"100%" }}>
                <Btn title={ showInfo ? "Confirm" :"Continue"} onPress={redirectUser} />
                { showInfo && <Btn title={"Edit "}  cls={"warning"}  onPress={() =>{ setShowInfo(false) }} /> }
                <Btn title={"Cancel"} cls={"danger"}  onPress={() =>{ navigation.goBack() }} />
            </View>

        </SafeAreaView>
    );
}
