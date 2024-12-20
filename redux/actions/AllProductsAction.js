import {
    GET_ALL_PRODUCTS_ATTEMPT,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILED
} from "./types";
import axios from "axios";

const URL_GET_PRODUCTS = "https://fakestoreapi.com/products?limit=";

export const getAllProductsInfo = ({limits= 4}) => {

    return (dispatch) => {

        dispatch({ type : GET_ALL_PRODUCTS_ATTEMPT });

        const link= URL_GET_PRODUCTS+limits;

        axios.get(link, {
            headers: {}
        })
            .then(function (rep) {

                handleResponse(dispatch,rep);

            })
            .catch(function (e) {

                console.log(e)

            })

    }

}

const handleResponse = (dispatch,data) => {

    if(data?.status) onGetAllProductsSuccess(dispatch,data?.data)
    else onGetAllProductsFailed(dispatch,data?.message)

}
const onGetAllProductsSuccess = (dispatch,products = {}) => {

    let _payload = {
        //status:true,
        loading: false,
        data : products
    }
    dispatch({ type : GET_ALL_PRODUCTS_SUCCESS , payload : _payload, status: true})

}
const onGetAllProductsFailed = (dispatch,errorMessage) => {

    const msgError = errorMessage ? "An error happened, please check your data again":"";

    let payload = {
        status:false,
        loading: false,
        data: {},
        error: msgError
    }
    dispatch({ type : GET_ALL_PRODUCTS_FAILED , payload})

}
