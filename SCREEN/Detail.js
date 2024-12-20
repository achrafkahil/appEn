import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, ImageBackground, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity}
    from 'react-native';
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
import Btn from "../components/Btn";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Detail() {

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const route= useRoute();
    const { params} = route;

    const arr = [1,2,3,4];
    const arrColor = ["#F00", "#0F0", "#00F","cyan"];

    const [detailProduct, setDetailProduct] = useState({})

    useEffect(() => {
        let _detailProduct = params?.detail ?? {};
        console.log(_detailProduct, " DETAILS PRODUCT -----")
        setDetailProduct(_detailProduct)
    }, [isFocused]);

    return (
        <SafeAreaView style={{ backgroundColor:"#fff" , flex: 1,
                                flexDirection:"column", justifyContent:"space-between",
                                   alignItems:"flex-start" }} >

            <View style={{ marginTop: 40 }}>

                <TouchableOpacity style={styles.backIcon} onPress={() =>{ navigation.navigate("Home") }}>
                    <Ionicons name="arrow-back" size={20} />
                </TouchableOpacity>

                <Image source={{ uri : detailProduct?.image }} resizeMode={"contain"} width={400} height={250} />

                <ScrollView style={{ margin:10, marginBottom: 50 }}>

                    <View style={{ marginTop : 20 }}>
                        <Text style={styles.txtTitle}>{ detailProduct?.title }</Text>
                        <Text style={styles.txtCategory}>{ "Category : "+detailProduct?.category }</Text>
                    </View>

                    <View style={{ flexDirection:"row", marginBottom: 20 }}>
                        <View style={styles.vwRate}>
                            <Ionicons name="star" color={"#f39c12"} size={18} />
                            <Text style={{ marginLeft : 10 }}>{ detailProduct?.rating?.rate }</Text>
                        </View>
                        <View style={styles.vwRate}>
                            <Ionicons name="chatbubble-sharp" color={"#1abc9c"} size={18} />
                            <Text style={{ marginLeft : 10 }}>{ detailProduct?.rating?.count }</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.txtDescription}>{ detailProduct?.description }</Text>
                    </View>
                </ScrollView>

            </View>

            <View style={{ flexDirection:"row", alignItems:"center", position:"absolute", bottom : 30 }}>
                <View style={{ width:"30%", flexDirection:"column" }}>
                    <Text style={styles.txtPrice}>{ detailProduct?.price+'$' }</Text>
                </View>
                <View style={{ width:"65%", flexDirection:"column" }}>
                    <Btn cls={"info"} title={"EXAMPLE"} />
                </View>

            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    backIcon:{
        position:"absolute",
        left:20,
        backgroundColor:"#ccc",
        borderRadius: 50,
        padding:5,
        top : 0,
        zIndex: 9
    },
    vwRate: {
        flexDirection:"row",
        alignItems:"center",
        margin:5,
        borderRadius : 15,
        borderWidth:1,
        borderColor : "#ccc",
        paddingHorizontal : 15,
        paddingVertical:5
    },
    txtTitle : {
        fontSize : 18,
    },
    txtCategory : {
        fontSize : 16,
        marginVertical : 20
    },
    txtDescription : {
        lineHeight:20
    },
    txtPrice : {
        textAlign:"center",
        fontSize:20,
        marginTop:10,
    }
});
