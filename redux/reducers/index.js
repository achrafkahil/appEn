import { combineReducers } from "redux";
import AllProductsReducers from "./AllProductsReducers";

export default combineReducers({
    allProducts: AllProductsReducers
})
