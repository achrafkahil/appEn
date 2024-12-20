import {
    GET_ALL_PRODUCTS_ATTEMPT,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILED
} from "../actions/types";

const INIT_STATE= { data:null, loading: false, error: "", status : false };

export default (state = INIT_STATE, action) => {
    switch (action.type){

        case GET_ALL_PRODUCTS_ATTEMPT :
            return {...state, loading: true, data:null, status : null }

        case GET_ALL_PRODUCTS_SUCCESS :
            return {...INIT_STATE, loading: false, data: action.payload.data, status : action.status}

        case GET_ALL_PRODUCTS_FAILED :
            return {...INIT_STATE, loading: false, error : action.payload.error,status : action.payload.status}

        default :
            return state;

    }
}
