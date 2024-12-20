import React, { useState, useEffect } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View , ActivityIndicator}
    from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from '@expo/vector-icons/Ionicons';
import Btn from "../components/Btn";
import {connect} from "react-redux";
import {getAllProductsInfo} from "../redux/actions/AllProductsAction";

const HomeScreen = (props) => {

    const navigation = useNavigation();
    const route= useRoute();
    const { params} = route;

    const logo = 'https://reactnative.dev/img/tiny_logo.png';
    const linkCategory = "https://fakestoreapi.com/products/categories";
    const linkProducts = "https://fakestoreapi.com/products?limit=6";
    const linkProductsByCategory = "https://fakestoreapi.com/products/category/";

    const [mail, setMail] = useState("");
    const [nameUser, setNameUser] = useState("");

    const [linkProductByCategory, setLinkProductByCategory] = useState(linkProducts);

    const [dataProducts, setDataProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [dataCategory, setDataCategory] = useState([])
    const [loadingCategory, setLoadingCategory] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all")

    const dataCategory_ = [
        { id:1, name : "Category 1", bgColor : "#F00", txtColor : "#fff" },
        { id:2, name : "Category 2", bgColor : "#0F0", txtColor : "#000" },
        { id:3, name : "Category 3", bgColor : "#00F", txtColor : "#fff" },
        { id:4, name : "Category 4", bgColor : "#000", txtColor : "#fff" }
    ];

    useEffect(() => {

        //const { email } = params; //params.email
        //setMail(email ?? "-");

        getData().then(res => setMail(res) );
        getDataObj().then(r => setNameUser(r.name));

        //GET CATEGORY
        getCategory()

        //GET PRODUCTS
        getProductByCategory()

    }, []);

    useEffect(() => {
        getProductByCategory()
    }, [linkProductByCategory]);

    useEffect(() => {
        props.getAllProductsInfo({limits:6});
    }, []);

    useEffect(() => {
        setLoading(true);

        if(props?.status && props?.dataProducts){
            setLoading(false);
            setDataProducts(props?.dataProducts);
        }

        else if(!props?.status && props?.error){
            setLoading(false);
            alert(props?.error);
        }

        else{
            setLoading(false);
        }

    }, [props]);

    const getCategory = () =>{

        setLoadingCategory(true);

        fetch(linkCategory)
        .then(res => res.json())
        .then(data =>{
            setDataCategory(data)
            setLoadingCategory(false)
        })

    }

    const getProductByCategory = () =>{
        //setLoading(true);
        /*fetch(linkProductByCategory)
            .then(res => res.json())
            .then(data =>{
                setDataProducts(data)
                console.log(data, "DATA PRODUCTS")
                setLoading(false)
            })*/
    }

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

    const handleChangeLinkProduct = (category = "") =>{
        setActiveCategory(category || "all")

        setLoadingCategory(true);
        let _link = category ? (linkProductsByCategory+category) : linkProducts
        setLinkProductByCategory(_link)
    }

    const renderCategories = () =>{
        return(
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 20 }}>

                <TouchableOpacity  key={"all"}
                                   onPress={() => { handleChangeLinkProduct("") }}
                                   style={styles.vsCategory("all" === activeCategory)}>
                    <Text > All </Text>
                </TouchableOpacity>

                {
                    (dataCategory && dataCategory.length>0) && (
                        dataCategory.map((item, idx) => {
                            return(
                                <TouchableOpacity
                                    onPress={() => { handleChangeLinkProduct(dataCategory[idx]) }}
                                    key={idx}
                                    style={styles.vsCategory(dataCategory[idx] === activeCategory)}>
                                    <Text style={{ color : item.txtColor }}> {dataCategory[idx]} </Text>
                                </TouchableOpacity>
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

    const renderLoader = () =>{
        return(
            <View>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        )
    }

    const renderProducts = () =>{
        return(
           (dataProducts && dataProducts.length > 0) && (
               dataProducts.map((item, idx) =>{
                   return(
                       <TouchableOpacity onPress={() =>{ navigation.navigate("Detail", {detail : item}) }}
                                         key={idx}
                                         style={{ width:170, marginBottom:15, borderWidth:1,
                                                borderColor:"#c7ecee",
                                                paddingTop:14, borderRadius: 10}}>
                           <>
                                <Image source={{ uri : item?.image }}
                                       resizeMode={"contain"}
                                       width={"100%"}
                                       height={150}
                                />
                           </>
                           <View style={{ margin:10 }}>
                               <Text numberOfLines={1}>{ item?.title }</Text>
                               <Text>{ item?.price+' $' }</Text>
                               <Text numberOfLines={1} >{ item?.category }</Text>
                           </View>
                       </TouchableOpacity>
                   )
               })
           )
        )
    }

    const renderHeader = () =>{
        return(
            <View style={{ height: 200, backgroundColor:"#dff9fb", paddingTop : 70, paddingHorizontal : 20 }}>
                <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                        <Ionicons name="menu" size={25} />
                    </TouchableOpacity>

                    <Image source={{ uri : logo }} style={{ width:25, height:25 }} />

                    <TouchableOpacity onPress={() =>{ alert('Notification') }}>
                        <Ionicons name="notifications-circle" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop : 30 }}>
                    <Text>Bonjour { nameUser } </Text>
                    <Text style={{ marginTop: 15 }}>Votre e-mail : { mail } </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ backgroundColor: "white" ,flexDirection:"column", flex: 1 }} >

            { renderHeader() }

            <ScrollView style={{ marginBottom:60 , marginHorizontal: 20}}>

                { /*renderMessageInfo()*/ }

                <View style={{ marginTop : 20 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
                        <Text> Categories </Text>
                       <TouchableOpacity onPress={() =>{ alert('Press see all ') }}>
                           <Text> See all </Text>
                       </TouchableOpacity>
                    </View>
                    { renderCategories() }
                </View>

                {
                    loading ? (
                            <View style={{ flexDirection:'row', justifyContent:'center',
                                            alignItems:"center", height:300 }}>
                                { renderLoader() }
                            </View>
                        )
                        :(
                            <View style={{ justifyContent:'space-between', flexDirection:'row', flexWrap:"wrap" }}>
                                { renderProducts() }
                            </View>
                        )
                }

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    vsCategory: (isActive) => ({
        padding:10,
        borderWidth:1,
        height:40,
        marginRight : 10,
        backgroundColor: isActive ? "#c7ecee" : "transparent",
    }),
});

const mapStateToProps = state => {
    return {
        status  : state.allProducts.status,
        error   : state.allProducts.error,
        loading : state.allProducts.loading,
        dataProducts    : state.allProducts.data
    }
}

export default connect( mapStateToProps, { getAllProductsInfo } )(HomeScreen);
