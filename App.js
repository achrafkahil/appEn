import React, { useState, useEffect } from 'react';
import {NavigationContainer} from "@react-navigation/native";

import DrawerNav from "./navigations/DrawerNav";
import {Provider} from "react-redux";
import {store} from './redux/store'

export default function App() {

  return (
    <Provider store={store}>
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    </Provider>
  );
}

