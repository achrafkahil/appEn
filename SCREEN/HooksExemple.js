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
    const handleChange1 = () =>{

       navigation.navigate("Basic",{ username : "NAME TEST", age : 24 });

    }

    const handleText  = (val) =>{
        setValue(val)
    }

    return (
        <View style={styles.container}>
            <Text> {value} </Text>
            <Text> Counter : { counter } </Text>

            <TextInput
                style={styles.input}
                value={value}
                placeholder={"placeholder ....."}
                onChangeText={handleText}
            />
            <Button title={"Press me .."} color={'#f00'} onPress={handleChange} />
            <Button title={"GO TO .."} color={'#f00'} onPress={handleChange1} />
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
});
