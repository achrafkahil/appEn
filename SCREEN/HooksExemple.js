import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";

export default function HooksExemple() {

    const navigation = useNavigation();
    const route=useRoute();
    const { params}=route;

    const [value, setValue] = useState("");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);
    const [usersFilter, setUsersFilter] = useState([]);

    useEffect( () =>{

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data =>{
                setUsers(data);
                setUsersFilter(data);
            })

    },[]);

    useEffect(() => {

        let filterData = users.filter( item => item.name.toLowerCase().includes(value.toLowerCase()) );
        setUsersFilter(filterData);

    }, [value]);

    const handleChange = () =>{

        setCounter(prev => prev+1 );

    }
    const goToBasic = () =>{

        //In simple navigate (Stack) : navigation.navigate("Basic",{ username : value, age : 24 });

        //navigate screen in Bottoms-tabs (Tabs)
        navigation.navigate('Tabs', { screen: "Basic" , params: { username : value }});
    }

    const handleText  = (val) =>{
        setValue(val)
    }

    return (
        <View style={styles.container}>
            <Text> Counter : { counter } </Text>
            <Button title={"Press me .."} color={'#f00'} onPress={handleChange} />

            <View style={styles.separator} />

            <Text> Search users </Text>
            <Text> {value} </Text>

            <TextInput
                style={styles.input}
                value={value}
                placeholder={"placeholder ....."}
                onChangeText={handleText}
            />
            <Button title={"Go to basic with value in input"} color={'#f00'} onPress={goToBasic} />
            {
                (usersFilter && usersFilter.length >0) && (
                    usersFilter.map((item, idx) =>{
                        return(
                            <View key={item.id}>
                                <Text> {item.name} </Text>
                            </View>
                        )
                    })
                )
            }

            <StatusBar style="dark" />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:"60%"
    },
    separator : {
        width:'100%',
        height:1,
        backgroundColor:'#000',
        marginVertical:15,
    }
});
