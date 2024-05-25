import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, ImageBackground, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View}
    from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import Input from "../components/Input";
import Btn from "../components/Btn";

export default function ExempleComponents() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <Input
                label={"Username"}
                value={username}
                placeH={"Fill input "}
                onChangeTxt={(text) => setUsername(text) }
                password={false}
            />

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
                placeH={"Fill Password "}
                onChangeTxt={(text) => setPassword(text) }
                password={true}
            />

            <Btn title={"INFO"} cls={"info"} />
            <Btn title={"Danger"} cls={"danger"} />
            <Btn title={"WARNING"} cls={"warning"} />

        </SafeAreaView>
    );
}
