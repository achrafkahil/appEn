import React, { useState, useEffect } from 'react';
import {NavigationContainer} from "@react-navigation/native";

import DrawerNav from "./navigations/DrawerNav";

export default function App() {

  return (
     <NavigationContainer>
        <DrawerNav />
     </NavigationContainer>
  );
}

