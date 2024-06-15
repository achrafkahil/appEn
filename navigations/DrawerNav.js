import {createDrawerNavigator} from "@react-navigation/drawer";
import Basics from "../SCREEN/Basics";
import HooksExemple from "../SCREEN/HooksExemple";
import Contact from "../SCREEN/Contact";
import Detail from "../SCREEN/Detail";
import DrawerNavCustom from "./DrawerNavCustom";
import Card from "../SCREEN/Card";
import IndexScreen from "../SCREEN/IndexScreen";
import NewAccountScreen from "../SCREEN/NewAccountScreen";
import LoginScreen from "../SCREEN/LoginScreen";
import HomeScreen from "../SCREEN/HomeScreen";

export default function DrawerNav(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName={"Index"}
                drawerContent = { props => <DrawerNavCustom {...props} />  }
        >
            <Drawer.Screen name={"Index"} component={IndexScreen} />
            <Drawer.Screen name={"NewAccount"} component={NewAccountScreen} />
            <Drawer.Screen name={"Home"} component={HomeScreen} />
            <Drawer.Screen name={"Login"} component={LoginScreen} />
            <Drawer.Screen name={"Basic"} component={Basics} />
            <Drawer.Screen name={"Contact"} component={Contact} />
            <Drawer.Screen name={"Hooks"} component={HooksExemple} />
            <Drawer.Screen name={"Detail"} component={Detail} />
            <Drawer.Screen name={"Card"} component={Card} />
        </Drawer.Navigator>
    )

}
